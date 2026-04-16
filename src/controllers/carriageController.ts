import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

/**
 * Get all carriages with train info (including train_status for lock logic)
 */
export const getAllCarriage = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const carriages = await prisma.carriage.findMany({
            where: {
                carriage_name: {
                    contains: search?.toString() || "",
                },
            },
            include: {
                train: {
                    select: {
                        id_train: true,
                        train_name: true,
                        train_status: true
                    }
                },
                seat: {
                    orderBy: {
                        seat_num: 'asc'
                    }
                }
            },
            orderBy: {
                carriage_name: 'asc'
            }
        });

        return response.status(200).json({
            status: true,
            data: carriages,
            message: "Carriages retrieved successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Get carriage by ID with train info
 */
export const getCarriageById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const carriage = await prisma.carriage.findUnique({
            where: { id_carriage: Number(id) },
            include: {
                train: {
                    select: {
                        id_train: true,
                        train_name: true,
                        train_status: true
                    }
                },
                seat: {
                    orderBy: {
                        seat_num: 'asc'
                    }
                }
            }
        });

        if (!carriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            });
        }

        return response.status(200).json({
            status: true,
            data: carriage,
            message: "Carriage found",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Create a new carriage with auto-generated seats based on quota
 */
export const createCarriage = async (request: Request, response: Response) => {

    try {
        const { carriage_name, carriage_category, id_train } = request.body;

        // Validation
        if (!carriage_name || !carriage_category || !id_train) {
            return response.status(400).json({
                status: false,
                message: "carriage_name, carriage_category, and id_train are required",
            });
        }

        // Validate category and derive quota
        const categoryQuotaMap: Record<string, number> = {
            'ECONOMY': 40,
            'BUSINESS': 10,
            'EXECUTIVE': 20
        };

        if (!categoryQuotaMap[carriage_category]) {
            return response.status(400).json({
                status: false,
                message: "carriage_category must be ECONOMY, EXECUTIVE, or BUSINESS",
            });
        }

        const quota = categoryQuotaMap[carriage_category];

        // Check if train exists
        const train = await prisma.train.findUnique({
            where: { id_train: Number(id_train) }
        });

        if (!train) {
            return response.status(404).json({
                status: false,
                message: "Train not found",
            });
        }

        // Create carriage and auto-generate seats
        const result = await prisma.$transaction(async (tx: any) => {
            const newCarriage = await tx.carriage.create({
                data: {
                    carriage_name,
                    carriage_category,
                    quota: Number(quota),
                    id_train: Number(id_train)
                },
            });

            // Auto-generate seats based on quota
            const seats = [];
            for (let i = 1; i <= Number(quota); i++) {
                seats.push({
                    seat_num: `${carriage_name}-${String(i).padStart(2, '0')}`,
                    id_carriage: newCarriage.id_carriage
                });
            }

            if (seats.length > 0) {
                await tx.seat.createMany({ data: seats });
            }

            return newCarriage;
        });

        return response.status(201).json({
            status: true,
            data: result,
            message: "Carriage created with auto-generated seats",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `Failed to create carriage. ${error}`,
        });
    }
};

/**
 * Update carriage - regenerates seats when category changes
 */
export const updateCarriage = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { carriage_name, carriage_category, id_train } = request.body;

        const carriageId = Number(id);

        const findCarriage = await prisma.carriage.findUnique({
            where: { id_carriage: carriageId },
        });

        if (!findCarriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            });
        }

        // Category → quota mapping
        const categoryQuotaMap: Record<string, number> = {
            'ECONOMY': 40,
            'BUSINESS': 10,
            'EXECUTIVE': 20
        };

        // Validate category if provided
        if (carriage_category) {
            if (!categoryQuotaMap[carriage_category]) {
                return response.status(400).json({
                    status: false,
                    message: "carriage_category must be ECONOMY, EXECUTIVE, or BUSINESS",
                });
            }
        }

        // Validate train if provided
        if (id_train) {
            const train = await prisma.train.findUnique({
                where: { id_train: Number(id_train) }
            });
            if (!train) {
                return response.status(404).json({
                    status: false,
                    message: "Train not found",
                });
            }
        }

        const newCategory = carriage_category ?? findCarriage.carriage_category;
        const newName = carriage_name ?? findCarriage.carriage_name;
        const categoryChanged = carriage_category && carriage_category !== findCarriage.carriage_category;

        const result = await prisma.$transaction(async (tx: any) => {
            // If category changed, regenerate seats with new quota
            if (categoryChanged) {
                const newQuota = categoryQuotaMap[newCategory];

                // Get all existing seats for this carriage
                const existingSeats = await tx.seat.findMany({
                    where: { id_carriage: carriageId },
                    select: { id_seat: true }
                });
                const seatIds = existingSeats.map((s: any) => s.id_seat);

                // Delete related seat_schedule and purchase_detail records
                if (seatIds.length > 0) {
                    await tx.seat_schedule.deleteMany({
                        where: { id_seat: { in: seatIds } }
                    });
                    await tx.purchase_detail.deleteMany({
                        where: { id_seat: { in: seatIds } }
                    });
                    await tx.seat.deleteMany({
                        where: { id_carriage: carriageId }
                    });
                }

                // Create new seats based on new quota
                const seats = [];
                for (let i = 1; i <= newQuota; i++) {
                    seats.push({
                        seat_num: `${newName}-${String(i).padStart(2, '0')}`,
                        id_carriage: carriageId
                    });
                }
                if (seats.length > 0) {
                    await tx.seat.createMany({ data: seats });
                }

                // Update carriage with new category and quota
                return await tx.carriage.update({
                    where: { id_carriage: carriageId },
                    data: {
                        carriage_name: newName,
                        carriage_category: newCategory,
                        quota: newQuota,
                        id_train: id_train ? Number(id_train) : findCarriage.id_train
                    },
                });
            } else {
                // No category change, just update name/train
                return await tx.carriage.update({
                    where: { id_carriage: carriageId },
                    data: {
                        carriage_name: newName,
                        carriage_category: newCategory,
                        id_train: id_train ? Number(id_train) : findCarriage.id_train
                    },
                });
            }
        });

        return response.status(200).json({
            status: true,
            data: result,
            message: categoryChanged
                ? "Carriage updated and seats regenerated successfully"
                : "Carriage updated successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Delete carriage - BLOCKED if parent train has active schedules
 */
export const deleteCarriage = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({
                status: false,
                message: "Carriage id is required",
            });
        }

        const carriageId = Number(id);

        // Get carriage with train info
        const carriage = await prisma.carriage.findUnique({
            where: { id_carriage: carriageId },
            include: {
                train: {
                    select: {
                        id_train: true,
                        train_status: true
                    }
                }
            }
        });

        if (!carriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            });
        }

        // Check if parent train has active schedules (isScheduleLocked)
        if (carriage.train?.train_status === 'ACTIVE') {
            return response.status(409).json({
                status: false,
                message: "Cannot delete this carriage because its train is currently used in an active schedule.",
            });
        }

        // Cascade delete seats and carriage
        await prisma.$transaction(async (tx: any) => {
            // Get all seats for this carriage
            const seats = await tx.seat.findMany({
                where: { id_carriage: carriageId },
                select: { id_seat: true }
            });
            const seatIds = seats.map((s: any) => s.id_seat);

            // Delete seat_schedule records
            if (seatIds.length > 0) {
                await tx.seat_schedule.deleteMany({
                    where: { id_seat: { in: seatIds } }
                });

                // Delete purchase_detail records
                await tx.purchase_detail.deleteMany({
                    where: { id_seat: { in: seatIds } }
                });

                // Delete seats
                await tx.seat.deleteMany({
                    where: { id_carriage: carriageId }
                });
            }

            // Delete carriage
            await tx.carriage.delete({
                where: { id_carriage: carriageId }
            });
        });

        return response.status(200).json({
            status: true,
            message: "Carriage deleted successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};
