import type { Request, Response } from "express"
import { PrismaClient } from "../../generated/prisma/index.js"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { carriage_category } from "../../generated/prisma/index.js"

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
})

const prisma: any = new PrismaClient({ adapter })

export const getAllCarriage = async (request: Request, response: Response) => {
    try {
        const { search } = request.query

        const getAllCarriage = await prisma.carriage.findMany({
            where: {
                carriage_name: {
                    contains: search?.toString() || "",
                },
            },
            select: {
                id_carriage: true,
                carriage_name: true,
                quota: true,
                carriage_category: true,
                train: {
                    select: {
                        id_train: true,
                        train_name: true,
                    },
                },
            },
        })

        return response.status(200).json({
            status: true,
            data: getAllCarriage,
            message: "Carriage has retrieved",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}

export const getCarriageById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params

        const carriage = await prisma.carriage.findUnique({
            where: { id_carriage: Number(id) },
            select: {
                id_carriage: true,
                carriage_name: true,
                quota: true,
                carriage_category: true,
                train: {
                    select: {
                        id_train: true,
                        train_name: true,
                    },
                },
            },
        })

        if (!carriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            })
        }

        return response.status(200).json({
            status: true,
            data: carriage,
            message: "Carriage found",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}

export const createCarriage = async (request: Request, response: Response) => {
    try {
        const { carriage_name, id_train, carriage_category: category } = request.body

        if (!carriage_name || !id_train || !category) {
            return response.status(400).json({
                status: false,
                message: "carriage name, id_train, and carriage_category are required",
            })
        }

        if (!Object.values(carriage_category).includes(category)) {
            return response.status(400).json({
                status: false,
                message: "Invalid carriage category value",
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

        const result = await prisma.$transaction(async (tx: any) => {
            const carriage = await tx.carriage.create({
                data: {
                    carriage_name,
                    id_train: Number(id_train),
                    carriage_category: category,
                    quota: 0,
                },
            })

            const seats = generateSeatByCarriageCategory(
                category,
                carriage.id_carriage
            )

            await tx.seat.createMany({ data: seats })

            // ⬇️ UPDATE + RETURN DATA TERBARU
            return await tx.carriage.update({
                where: { id_carriage: carriage.id_carriage },
                data: { quota: seats.length },
            })
        })

        return response.status(201).json({
            status: true,
            message: "Carriage & seats created successfully",
            data: result,
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `Failed to create carriage. ${error}`,
        })
    }
}


const generateSeatByCarriageCategory = (
    category: carriage_category,
    carriageId: number
) => {
    let rows = 0;
    let columns: string[] = [];

    switch (category) {
        case "BUSSINESS":
            rows = 5;
            columns = ["A", "B"];
            break;

        case "EKSEKUTIVE":
            rows = 10;
            columns = ["A", "B"];
            break;

        case "ECONOMY":
            rows = 10;
            columns = ["A", "B", "C", "D"];
            break;
    }

    const seats = [];

    for (let row = 1; row <= rows; row++) {
        for (const col of columns) {
            seats.push({
                seat_num: `${row}${col}`,
                id_carriage: carriageId,
            });
        }
    }

    return seats;
};

export const updateCarriage = async (request: Request, response: Response) => {
    try {
        const { id } = request.params
        const { carriage_name, id_train, carriage_category } = request.body

        const carriage = await prisma.carriage.findUnique({
            where: { id_carriage: Number(id) },
        })

        if (!carriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            })
        }

        if (id_train) {
            const train = await prisma.train.findUnique({
                where: { id_train: Number(id_train) },
            })

            if (!train) {
                return response.status(404).json({
                    status: false,
                    message: "Train not found",
                })
            }
        }

        const result = await prisma.$transaction(async (tx: any) => {
            let quota = carriage.quota

            // category berubah → regenerate seat
            if (
                carriage_category &&
                carriage_category !== carriage.carriage_category
            ) {
                await tx.seat.deleteMany({
                    where: { id_carriage: carriage.id_carriage },
                })

                const seats = generateSeatByCarriageCategory(
                    carriage_category,
                    carriage.id_carriage
                )

                await tx.seat.createMany({ data: seats })

                quota = seats.length
            }

            // update carriage + return data TERBARU
            return await tx.carriage.update({
                where: { id_carriage: carriage.id_carriage },
                data: {
                    carriage_name: carriage_name ?? carriage.carriage_name,
                    id_train: id_train ? Number(id_train) : carriage.id_train,
                    carriage_category:
                        carriage_category ?? carriage.carriage_category,
                    quota,
                },
                include: {
                    train: {
                        select: {
                            id_train: true,
                            train_name: true,
                        },
                    },
                },
            })
        })

        return response.status(200).json({
            status: true,
            message: "Carriage updated successfully",
            data: result,
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}

export const deleteCarriage = async (request: Request, response: Response) => {
    try {
        const { id } = request.params
        const carriageId = Number(id)

        const carriage = await prisma.carriage.findUnique({
            where: { id_carriage: carriageId },
        })

        if (!carriage) {
            return response.status(404).json({
                status: false,
                message: "Carriage not found",
            })
        }

        await prisma.$transaction(async (tx: any) => {
            // hapus seat
            await tx.seat.deleteMany({
                where: { id_carriage: carriageId },
            })

            // hapus carriage
            await tx.carriage.delete({
                where: { id_carriage: carriageId },
            })
        })

        return response.status(200).json({
            status: true,
            message: "Carriage & seats deleted successfully",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}
