import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { BASE_URL, SECRET } from "../global.js";
import fs from "fs";

const adapter = new PrismaMariaDb(
    {
        host: "localhost",
        port: 3306,
        database: "ukk",
    }
)

const prisma: any = new PrismaClient({ adapter });

// WIB timezone offset (+7 hours from UTC)
const WIB_OFFSET = 7 * 60 * 60 * 1000;
function getNowWIB(): Date {
    return new Date(new Date().getTime() + WIB_OFFSET);
}

export const getAllTrain = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const allTrain = await prisma.train.findMany({
            where: {
                train_name: {
                    contains: search?.toString() || "",
                },
            },
            include: {
                carriage: {
                    include: {
                        seat: {
                            orderBy: {
                                seat_num: 'asc'
                            }
                        }
                    },
                    orderBy: {
                        carriage_name: 'asc'
                    }
                }
            },
            orderBy: {
                train_name: 'asc'
            }
        });

        return response.status(200).json({
            status: true,
            data: allTrain,
            message: "Train has retrieved",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getTrainById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const train = await prisma.train.findUnique({
            where: { id_train: Number(id) },
            include: {
                carriage: {
                    include: {
                        seat: {
                            orderBy: {
                                seat_num: 'asc'
                            }
                        }
                    },
                    orderBy: {
                        carriage_name: 'asc'
                    }
                }
            }
        });

        if (!train) {
            return response.status(404).json({
                status: false,
                message: "Train not found",
            });
        }

        return response.status(200).json({
            status: true,
            data: train,
            message: "Train found",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const createTrain = async (request: Request, response: Response) => {
    try {
        const { train_name, description } = request.body;

        let filename = ""
        if (request.file) filename = request.file.filename

        // Validasi minimal
        if (!train_name || !description) {
            return response.status(400).json({
                status: false,
                message: "train name, description is required",
            });
        }

        const newTrain = await prisma.train.create({
            data: {
                train_name,
                description,
                train_picture: filename || ""
            },
        });

        return response.status(201).json({
            status: true,
            data: {
                id_train: newTrain.id_train,
                train_name: newTrain.train_name,
                description: newTrain.description,
                train_picture: newTrain.train_picture,
            },
            message: "Train has been created",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `Failed to create train. ${error}`,
        });
    }
};

export const updateTrain = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { train_name, description } = request.body;

        let filename = ""
        if (request.file) filename = request.file.filename

        const findTrain = await prisma.train.findUnique({
            where: { id_train: Number(id) },
        });

        if (!findTrain) {
            return response.status(404).json({
                status: false,
                message: "Train not found",
            });
        }

        const updated = await prisma.train.update({
            where: { id_train: Number(id) },
            data: {
                train_name: train_name ?? findTrain.train_name,
                description: description ?? findTrain.description,
                // profile_picture: filename || findTrain.profile_picture
            },
        })

        return response.status(200).json({
            status: true,
            data: updated,
            message: "Train has been updated",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const changePicture = async (request: any, response: Response) => {
    try {
        const { id } = request.params

        const findTrain = await prisma.train.findFirst({ where: { id_train: Number(id) } })
        if (!findTrain) return response
            .status(404)
            .json({ status: false, message: `Train is not found` })

        let filename = findTrain.train_picture
        if (request.file) {
            filename = request.file.filename
            let path = `${BASE_URL}/../public/train_picture/${findTrain.train_picture}`
            let exists = fs.existsSync(path)
            if (exists && findTrain.train_picture !== ``) fs.unlinkSync(path)
        }

        const updatePicture = await prisma.train.update({
            data: { train_picture: filename },
            where: { id_train: Number(id) }
        })

        return response.status(200).json({
            status: true,
            data: updatePicture,
            message: `Picture has changed`
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`
        })
    }
}

export const deleteTrain = async (request: Request, response: Response) => {
    try {
        const { id } = request.params

        if (!id) {
            return response.status(400).json({
                status: false,
                message: "Train id is required",
            })
        }

        const trainId = Number(id)

        const train = await prisma.train.findUnique({
            where: { id_train: trainId },
        })

        if (!train) {
            return response.status(404).json({
                status: false,
                message: "Train not found",
            })
        }

        // Check for ANY ACTIVED schedule (status-based only, not time-based)
        const activeSchedule = await prisma.schedule.findFirst({
            where: {
                id_train: trainId,
                status: "ACTIVED"  // Only check status, not arrival_date
            },
        })

        if (activeSchedule) {
            return response.status(409).json({
                status: false,
                message: "Cannot delete this train because it is currently used in an active schedule.",
            })
        }

        // Cascade delete all related records in correct order
        await prisma.$transaction(async (tx: any) => {
            // Get all carriages for this train
            const carriages = await tx.carriage.findMany({
                where: { id_train: trainId },
                select: { id_carriage: true }
            })
            const carriageIds = carriages.map((c: any) => c.id_carriage)

            // Get all seats for these carriages
            const seats = await tx.seat.findMany({
                where: { id_carriage: { in: carriageIds } },
                select: { id_seat: true }
            })
            const seatIds = seats.map((s: any) => s.id_seat)

            // Get all schedules for this train (to clean up purchase records)
            const schedules = await tx.schedule.findMany({
                where: { id_train: trainId },
                select: { id_schedule: true }
            })
            const scheduleIds = schedules.map((s: any) => s.id_schedule)

            // Delete in correct order (deepest dependencies first)
            // 1. Delete seat_schedule records
            if (seatIds.length > 0) {
                await tx.seat_schedule.deleteMany({
                    where: { id_seat: { in: seatIds } }
                })
            }

            // 2. Delete purchase_detail records (linked to seats)
            if (seatIds.length > 0) {
                await tx.purchase_detail.deleteMany({
                    where: { id_seat: { in: seatIds } }
                })
            }

            // 3. Delete ticket_purchase records (linked to schedules)
            if (scheduleIds.length > 0) {
                await tx.ticket_purchase.deleteMany({
                    where: { id_schedule: { in: scheduleIds } }
                })
            }

            // 4. Delete seats
            if (carriageIds.length > 0) {
                await tx.seat.deleteMany({
                    where: { id_carriage: { in: carriageIds } }
                })
            }

            // 5. Delete schedules (finished/cancelled only at this point)
            await tx.schedule.deleteMany({
                where: { id_train: trainId }
            })

            // 6. Delete carriages
            await tx.carriage.deleteMany({
                where: { id_train: trainId }
            })

            // 7. Finally delete the train
            await tx.train.delete({
                where: { id_train: trainId }
            })
        })

        return response.status(200).json({
            status: true,
            message: "Train has been deleted",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}