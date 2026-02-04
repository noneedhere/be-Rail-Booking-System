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

export const getAllTrain = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const allTrain = await prisma.train.findMany({
            where: {
                train_name: {
                    contains: search?.toString() || "",
                },
            },
            select: {
                id_train: true,
                train_name: true,
                description: true,
            },
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
            select: {
                id_train: true,
                train_name: true,
                description: true,
            },
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
                // profile_picture: filename
            },
        });

        return response.status(201).json({
            status: true,
            data: {
                id_train: newTrain.id_train,
                train_name: newTrain.train_name,
                description: newTrain.description,
                // profile_picture: newTrain.profile_picture,
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
        /** get id of menu's id that sent in parameter of URL */
        const { id } = request.params

        /** make sure that data is exists in database */
        const findTrain = await prisma.train.findFirst({ where: { id_train: Number(id) } })
        if (!findTrain) return response
            .status(200)
            .json({ status: false, message: `Train is not found` })

        /** default value filename of saved data */
        let filename = findTrain.profile_picture
        if (request.file) {
            /** update filename by new uploaded picture */
            filename = request.file.filename
            /** check the old picture in the folder */
            let path = `${BASE_URL}/../public/profilePicture/${findTrain.profile_picture}`
            let exists = fs.existsSync(path)
            /** delete the old exists picture if reupload new file */
            if (exists && findTrain.profile_picture !== ``) fs.unlinkSync(path)
        }

        /** process to update picture in database */
        const update_Picture = await prisma.train.update({
            data: { profile_picture: filename },
            where: { id_train: Number(id) }
        })

        return response.json({
            status: true,
            data: update_Picture,
            message: `Picture has changed`
        }).status(200)
    } catch (error) {
        return response.json({
            status: false,
            message: `There is an error. ${error}`
        }).status(400)
    }
}

export const deleteTrain = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const train = await prisma.train.findUnique({
            where: { id_train: Number(id) },
        });

        if (!train) {
            return response.status(404).json({
                status: false,
                message: "Train not found",
            });
        }

        await prisma.train.delete({
            where: { id_train: Number(id) },
        });

        return response.status(200).json({
            status: true,
            message: "Train has been deleted",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};