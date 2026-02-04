import type { Request, Response } from "express";
import { PrismaClient, status } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

export const getAllSchedule = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const schedules = await prisma.schedule.findMany({
            where: {
                OR: [
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
            departure,
            destination,
            departure_date,
            arrival_date,
            adult_price,
            child_price,
            id_train,
        } = request.body

        if (
            !departure ||
            !destination ||
            !departure_date ||
            !arrival_date ||
            !adult_price ||
            !child_price ||
            !id_train
        ) {
            return response.status(400).json({
                status: false,
                message: "All required fields must be filled",
            })
        }

        const departureDate = new Date(departure_date)
        const arrivalDate = new Date(arrival_date)

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
                arrival_date: { lt:  new Date() },
            },
            data: { status: "FINISHED" },
        })

        const schedule = await prisma.schedule.create({
            data: {
                departure,
                destination,
                departure_date: departureDate,
                arrival_date: arrivalDate,
                adult_price,
                child_price,
                quota_total: totalQuota,
                status: "ACTIVED",
                train: {
                    connect: { id_train: Number(id_train) },
                },
            },
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
            departure_date,
            arrival_date,
            adult_price,
            child_price,
            status,
        } = request.body;

        const updatedSchedule = await prisma.schedule.update({
            where: { id_schedule: Number(id) },
            data: {
                ...(departure_date && {
                    departure_date: new Date(departure_date),
                }),
                ...(arrival_date && {
                    arrival_date: new Date(arrival_date),
                }),
                ...(adult_price !== undefined && { adult_price }),
                ...(child_price !== undefined && { child_price }),
                ...(status && { status }),
            },
        });

        return response.status(200).json({
            status: true,
            message: "Schedule has updated",
            data: updatedSchedule,
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

        await prisma.schedule.delete({
            where: { id_schedule: Number(id) },
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
