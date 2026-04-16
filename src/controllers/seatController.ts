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
 * Get all seats with carriage and train info (including train_status for lock logic)
 */
export const getAllSeat = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const seats = await prisma.seat.findMany({
            where: {
                seat_num: {
                    contains: search?.toString() || "",
                },
            },
            include: {
                carriage: {
                    select: {
                        id_carriage: true,
                        carriage_name: true,
                        carriage_category: true,
                        quota: true,
                        train: {
                            select: {
                                id_train: true,
                                train_name: true,
                                train_status: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                seat_num: 'asc'
            }
        });

        return response.status(200).json({
            status: true,
            data: seats,
            message: "Seats retrieved successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Get seat by ID with carriage and train info
 */
export const getSeatById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const seat = await prisma.seat.findUnique({
            where: { id_seat: Number(id) },
            include: {
                carriage: {
                    select: {
                        id_carriage: true,
                        carriage_name: true,
                        carriage_category: true,
                        quota: true,
                        train: {
                            select: {
                                id_train: true,
                                train_name: true,
                                train_status: true
                            }
                        }
                    }
                }
            }
        });

        if (!seat) {
            return response.status(404).json({
                status: false,
                message: "Seat not found",
            });
        }

        return response.status(200).json({
            status: true,
            data: seat,
            message: "Seat found",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Create a new seat
 */
export const createSeat = async (request: Request, response: Response) => {
    try {
        const { seat_num, id_carriage } = request.body;

        // Validation
        if (!seat_num || !id_carriage) {
            return response.status(400).json({
                status: false,
                message: "seat_num and id_carriage are required",
            });
        }

        // Check if carriage exists
        const carriage = await prisma.carriage.findUnique({
            where: { id_carriage: Number(id_carriage) }
        });

        if (!carriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            });
        }

        // Check for duplicate seat number in carriage
        const existingSeat = await prisma.seat.findFirst({
            where: {
                seat_num,
                id_carriage: Number(id_carriage)
            }
        });

        if (existingSeat) {
            return response.status(409).json({
                status: false,
                message: "Seat number already exists in this carriage",
            });
        }

        const newSeat = await prisma.seat.create({
            data: {
                seat_num,
                id_carriage: Number(id_carriage)
            },
        });

        // Update carriage quota
        await prisma.carriage.update({
            where: { id_carriage: Number(id_carriage) },
            data: { quota: { increment: 1 } }
        });

        return response.status(201).json({
            status: true,
            data: newSeat,
            message: "Seat created successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `Failed to create seat. ${error}`,
        });
    }
};

/**
 * Update seat
 */
export const updateSeat = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { seat_num, id_carriage } = request.body;

        const findSeat = await prisma.seat.findUnique({
            where: { id_seat: Number(id) },
        });

        if (!findSeat) {
            return response.status(404).json({
                status: false,
                message: "Seat not found",
            });
        }

        // Validate carriage if provided
        if (id_carriage) {
            const carriage = await prisma.carriage.findUnique({
                where: { id_carriage: Number(id_carriage) }
            });
            if (!carriage) {
                return response.status(404).json({
                    status: false,
                    message: "Carriage not found",
                });
            }
        }

        // Check for duplicate seat number if changing
        if (seat_num && seat_num !== findSeat.seat_num) {
            const targetCarriage = id_carriage ? Number(id_carriage) : findSeat.id_carriage;
            const existingSeat = await prisma.seat.findFirst({
                where: {
                    seat_num,
                    id_carriage: targetCarriage,
                    NOT: { id_seat: Number(id) }
                }
            });

            if (existingSeat) {
                return response.status(409).json({
                    status: false,
                    message: "Seat number already exists in this carriage",
                });
            }
        }

        const updated = await prisma.seat.update({
            where: { id_seat: Number(id) },
            data: {
                seat_num: seat_num ?? findSeat.seat_num,
                id_carriage: id_carriage ? Number(id_carriage) : findSeat.id_carriage
            },
        });

        return response.status(200).json({
            status: true,
            data: updated,
            message: "Seat updated successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Delete seat - BLOCKED if parent train has active schedules
 */
export const deleteSeat = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({
                status: false,
                message: "Seat id is required",
            });
        }

        const seatId = Number(id);

        // Get seat with carriage and train info
        const seat = await prisma.seat.findUnique({
            where: { id_seat: seatId },
            include: {
                carriage: {
                    select: {
                        id_carriage: true,
                        train: {
                            select: {
                                id_train: true,
                                train_status: true
                            }
                        }
                    }
                }
            }
        });

        if (!seat) {
            return response.status(404).json({
                status: false,
                message: "Seat not found",
            });
        }

        // Check if parent train has active schedules (isScheduleLocked)
        if (seat.carriage?.train?.train_status === 'ACTIVE') {
            return response.status(409).json({
                status: false,
                message: "Cannot delete this seat because its train is currently used in an active schedule.",
            });
        }

        // Delete seat and related records
        await prisma.$transaction(async (tx: any) => {
            // Delete seat_schedule records
            await tx.seat_schedule.deleteMany({
                where: { id_seat: seatId }
            });

            // Delete purchase_detail records
            await tx.purchase_detail.deleteMany({
                where: { id_seat: seatId }
            });

            // Delete seat
            await tx.seat.delete({
                where: { id_seat: seatId }
            });

            // Update carriage quota
            if (seat.carriage?.id_carriage) {
                await tx.carriage.update({
                    where: { id_carriage: seat.carriage.id_carriage },
                    data: { quota: { decrement: 1 } }
                });
            }
        });

        return response.status(200).json({
            status: true,
            message: "Seat deleted successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};
