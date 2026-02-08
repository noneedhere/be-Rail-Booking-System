import type { Request, Response } from "express"
import { PrismaClient } from "../../generated/prisma/index.js"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
})

const prisma: any = new PrismaClient({ adapter })

export const getAllSeat = async (request: Request, response: Response) => {
    try {
        const { search } = request.query

        const seats = await prisma.seat.findMany({
            where: {
                seat_num: {
                    contains: search?.toString() || "",
                },
            },
            select: {
                id_seat: true,
                seat_num: true,
                carriage: {
                    select: {
                        id_carriage: true,
                        carriage_name: true,
                        quota: true,
                        train: {
                            select: {
                                id_train: true,
                                train_name: true,

                            },
                        },
                    },
                },
            },
        })

        return response.status(200).json({
            status: true,
            data: seats,
            message: "Seat has retrieved",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}

export const getSeatById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params

        const seat = await prisma.seat.findUnique({
            where: { id_seat: Number(id) },
            select: {
                id_seat: true,
                seat_num: true,
                carriage: {
                    select: {
                        id_carriage: true,
                        carriage_name: true,
                        quota: true,
                        train: {
                            select: {
                                id_train: true,
                                train_name: true,
                            },
                        },
                    },
                },
            },
        })

        if (!seat) {
            return response.status(404).json({
                status: false,
                message: "Seat not found",
            })
        }

        return response.status(200).json({
            status: true,
            data: seat,
            message: "Seat found",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}

export const createSeat = async (request: Request, response: Response) => {
    try {
        const { seat_num, id_carriage } = request.body

        if (!seat_num) {
            return response.status(400).json({
                status: false,
                message: "seat_num are required",
            })
        }

        if (!id_carriage) {
            return response.status(400).json({
                status: false,
                message: "id_carriage are required",
            })
        }

        const findCarriage = await prisma.carriage.findUnique({
            where: { id_carriage: Number(id_carriage) },
        })

        if (!findCarriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            })
        }

        const currentSeatCount = await prisma.seat.count({
            where: { id_carriage: Number(id_carriage) }
        });

        if (currentSeatCount >= findCarriage.quota) {
            return response.status(400).json({
                status: false,
                message: `Carriage quota (${findCarriage.quota}) exceeded`
            });
        }


        const newSeat = await prisma.seat.create({
            data: {
                seat_num,
                id_carriage: Number(id_carriage),
            },
            include: {
                carriage: {
                    select: {
                        id_carriage: true,
                        carriage_name: true,
                        quota: true,
                        train: {
                            select: {
                                id_train: true,
                                train_name: true,
                            },
                        },
                    },
                },
            },
        })

        return response.status(201).json({
            status: true,
            data: newSeat,
            message: "Seat has been created",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `Failed to create seat. ${error}`,
        })
    }
}

export const updateSeat = async (request: Request, response: Response) => {
    try {
        const { id } = request.params
        const { seat_num, id_carriage } = request.body

        const findSeat = await prisma.seat.findUnique({
            where: { id_seat: Number(id) },
        })

        if (!findSeat) {
            return response.status(404).json({
                status: false,
                message: "Seat not found",
            })
        }

        if (id_carriage) {
            const findCarriage = await prisma.carriage.findUnique({
                where: { id_carriage: Number(id_carriage) },
            })

            if (!findCarriage) {
                return response.status(404).json({
                    status: false,
                    message: "Carriage not found",
                })
            }
        }

        const updated = await prisma.seat.update({
            where: { id_seat: Number(id) },
            data: {
                seat_num: seat_num ?? findSeat.seat_num,
                id_carriage: id_carriage ? Number(id_carriage) : findSeat.id_carriage,
            },
            include: {
                carriage: {
                    select: {
                        id_carriage: true,
                        carriage_name: true,
                        quota: true,
                        train: {
                            select: {
                                id_train: true,
                                train_name: true,
                            },
                        },
                    },
                },
            },
        })

        return response.status(200).json({
            status: true,
            data: updated,
            message: "Seat has been updated",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}

export const deleteSeat = async (request: Request, response: Response) => {
    try {
        const { id } = request.params

        const seat = await prisma.seat.findUnique({
            where: { id_seat: Number(id) },
        })

        if (!seat) {
            return response.status(404).json({
                status: false,
                message: "Seat not found",
            })
        }

        await prisma.seat.delete({
            where: { id_seat: Number(id) },
        })

        return response.status(200).json({
            status: true,
            message: "Seat has been deleted",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}
