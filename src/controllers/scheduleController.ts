import type { Request, Response } from "express";
import { PrismaClient, status, train_status } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

// Helper function to update train status based on active schedules
async function updateTrainStatus(trainId: number, tx: any) {
    const activeSchedules = await tx.schedule.count({
        where: {
            id_train: trainId,
            status: 'ACTIVED',
            arrival_date: { gte: new Date() }
        }
    });

    const newStatus = activeSchedules > 0 ? 'ACTIVE' : 'AVAILABLE';

    await tx.train.update({
        where: { id_train: trainId },
        data: { train_status: newStatus }
    });
}

export const getAllSchedule = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const schedules = await prisma.schedule.findMany({
            where: {
                OR: [
                    {
                        schedule_name: {
                            contains: search?.toString() || "",
                        },
                    },
                    {
                        departure: {
                            contains: search?.toString() || "",
                        },
                    },
                    {
                        destination: {
                            contains: search?.toString() || "",
                        },
                    },
                ],
            },
        });

        return response.status(200).json({
            status: true,
            data: schedules,
            message: "Schedule has retrieved",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getScheduleById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const schedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id) },
        });

        if (!schedule) {
            return response.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        return response.status(200).json({
            status: true,
            data: schedule,
            message: "Schedule found",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const createSchedule = async (request: Request, response: Response) => {
    try {
        const {
            schedule_name,
            departure,
            destination,
            departure_date,
            arrival_date,
            price,
            id_train,
        } = request.body

        if (
            !schedule_name ||
            !departure ||
            !destination ||
            !departure_date ||
            !arrival_date ||
            !price ||
            !id_train
        ) {
            return response.status(400).json({
                status: false,
                message: "All required fields must be filled (schedule_name, departure, destination, departure_date, arrival_date, price, id_train)",
            })
        }

        const departureDate = new Date(departure_date)
        const arrivalDate = new Date(arrival_date)

        const now = new Date();
        if (departureDate < now) {
            return response.status(400).json({
                status: false,
                message: "Departure date cannot be in the past"
            });
        }

        if (arrivalDate <= departureDate) {
            return response.status(400).json({
                status: false,
                message: "Arrival date must be after departure date"
            });
        }


        const conflictSchedule = await prisma.schedule.findFirst({
            where: {
                id_train: Number(id_train),
                status: "ACTIVED",
                AND: [
                    {
                        departure_date: { lt: arrivalDate },
                    },
                    {
                        arrival_date: { gt: departureDate },
                    },
                ],
            },
        })

        if (conflictSchedule) {
            return response.status(409).json({
                status: false,
                message:
                    "Train is already assigned to another schedule during this time",
            })
        }

        const train = await prisma.train.findUnique({
            where: { id_train: Number(id_train) },
        })

        if (!train) {
            return response.status(404).json({
                status: false,
                message: "Train not found",
            })
        }

        const totalQuota = await prisma.seat.count({
            where: {
                carriage: {
                    id_train: Number(id_train),
                },
            },
        })

        if (totalQuota === 0) {
            return response.status(400).json({
                status: false,
                message: "Train has no seats",
            })
        }

        await prisma.schedule.updateMany({
            where: {
                status: "ACTIVED",
                arrival_date: { lt: new Date() },
            },
            data: { status: "FINISHED" },
        })

        // audit_report no 16 - Fixed: Now using transaction to create seat_schedule entries

        const schedule = await prisma.$transaction(async (tx: any) => {
            // Create the schedule
            const newSchedule = await tx.schedule.create({
                data: {
                    schedule_name,
                    departure,
                    destination,
                    departure_date: departureDate,
                    arrival_date: arrivalDate,
                    price,
                    quota_total: totalQuota,
                    status: "ACTIVED",
                    train: {
                        connect: { id_train: Number(id_train) },
                    },
                },
            });

            // Get all seats for this train
            const seats = await tx.seat.findMany({
                where: {
                    carriage: {
                        id_train: Number(id_train)
                    }
                }
            });

            // Create seat_schedule for each seat (marks all seats as AVAILABLE)
            if (seats.length > 0) {
                await tx.seat_schedule.createMany({
                    data: seats.map((seat: any) => ({
                        id_seat: seat.id_seat,
                        id_schedule: newSchedule.id_schedule,
                        seatschedule_status: 'AVAILABLE'
                    }))
                });
            }

            // Update train status to ACTIVE
            await updateTrainStatus(Number(id_train), tx);

            return newSchedule;
        })

        return response.status(201).json({
            status: true,
            data: schedule,
            message: "Schedule has created",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}



export const updateSchedule = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const existingSchedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id) },
        });

        if (!existingSchedule) {
            return response.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        const {
            schedule_name,
            departure_date,
            arrival_date,
            price,
            status,
        } = request.body;

        const result = await prisma.$transaction(async (tx: any) => {
            const updatedSchedule = await tx.schedule.update({
                where: { id_schedule: Number(id) },
                data: {
                    ...(schedule_name && { schedule_name }),
                    ...(departure_date && {
                        departure_date: new Date(departure_date),
                    }),
                    ...(arrival_date && {
                        arrival_date: new Date(arrival_date),
                    }),
                    ...(price !== undefined && { price }),
                    ...(status && { status }),
                },
            });

            // If status changed to FINISHED or CANCELLED, update train status
            if (status && (status === 'FINISHED' || status === 'CANCELLED')) {
                await updateTrainStatus(existingSchedule.id_train, tx);
            }

            return updatedSchedule;
        });

        return response.status(200).json({
            status: true,
            message: "Schedule has updated",
            data: result,
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
}

export const deleteSchedule = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const schedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id) },
        });

        if (!schedule) {
            return response.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        await prisma.$transaction(async (tx: any) => {
            await tx.schedule.delete({
                where: { id_schedule: Number(id) },
            });

            // Update train status after deleting schedule
            await updateTrainStatus(schedule.id_train, tx);
        });

        return response.status(200).json({
            status: true,
            message: "Schedule has deleted",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};
