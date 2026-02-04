import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { BASE_URL, SECRET } from "../global.js";
import fs from "fs";
import md5 from "md5";
import multer from "multer";

const adapter = new PrismaMariaDb(
    {
        host: "localhost",
        port: 3306,
        database: "ukk",
    }
)

const prisma: any = new PrismaClient({ adapter });

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const allUser = await prisma.user.findMany({
            where: {
                username: {
                    contains: search?.toString() || "",
                },
            },
            select: {
                id_user: true,
                username: true,
                role: true
            },
        });

        return response.status(200).json({
            status: true,
            data: allUser,
            message: "User has retrieved",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getUserById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const user = await prisma.user.findUnique({
            where: { id_user: Number(id) },
            select: {
                id_user: true,
                username: true,
                role: true
            },
        });

        if (!user) {
            return response.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        return response.status(200).json({
            status: true,
            data: user,
            message: "User found",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const createUser = async (request: Request, response: Response) => {
    try {
        const { username, email, password, phone, role } = request.body;

        let filename = ""
        if (request.file) filename = request.file.filename

        // Validasi minimal
        if (!username || !email || !password || !phone) {
            return response.status(400).json({
                status: false,
                message: "username, email, password, and phone required",
            });
        }

        const nik = `NIK${Date.now()}${Math.floor(Math.random() * 1000)}`;

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: md5(password),
                phone,
                nik,
                role,
                // profile_picture: filename
            },
        });

        return response.status(201).json({
            status: true,
            data: {
                id_user: newUser.id_user,
                username: newUser.username,
                email: newUser.email,
                phone: newUser.phone,
                role: newUser.role,
            },
            message: "Akun berhasil dibuat",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: "Gagal membuat akun",
        });
    }
};

export const updateUser = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { username, password, address, phone, role } = request.body;

        const findUser = await prisma.user.findUnique({
            where: { id_user: Number(id) },
        });

        if (!findUser) {
            return response.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        const updated = await prisma.user.update({
            where: { id_user: Number(id) },
            data: {
                username: username ?? findUser.username,
                address: address ?? findUser.address,
                phone: phone ?? findUser.phone,
                password: password ? md5(password) : findUser.password,
                role: role ?? findUser.role,
            },
        })

        return response.status(200).json({
            status: true,
            data: updated,
            message: "User has been updated",
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
        const findUser = await prisma.user.findFirst({ where: { id_user: Number(id) } })
        if (!findUser) return response
            .status(200)
            .json({ status: false, message: `User is not found` })

        /** default value filename of saved data */
        let filename = findUser.profile_picture
        if (request.file) {
            /** update filename by new uploaded picture */
            filename = request.file.filename
            /** check the old picture in the folder */
            let path = `${BASE_URL}/../public/profilePicture/${findUser.profile_picture}`
            let exists = fs.existsSync(path)
            /** delete the old exists picture if reupload new file */
            if (exists && findUser.profile_picture !== ``) fs.unlinkSync(path)
        }

        /** process to update picture in database */
        const updatePicture = await prisma.user.update({
            data: { profile_picture: filename },
            where: { id_user: Number(id) }
        })

        return response.json({
            status: true,
            data: updatePicture,
            message: `Picture has changed`
        }).status(200)
    } catch (error) {
        return response.json({
            status: false,
            message: `There is an error. ${error}`
        }).status(400)
    }
}

export const deleteUser = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const user = await prisma.user.findUnique({
            where: { id_user: Number(id) },
        });

        if (!user) {
            return response.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        await prisma.user.delete({
            where: { id_user: Number(id) },
        });

        return response.status(200).json({
            status: true,
            message: "User has been deleted",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const authentication = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const user = await prisma.user.findFirst({
            where: {
                username,
                password: md5(password)
            }
        });

        if (!user) {
            return res.status(401).json({
                status: false,
                logged: false,
                message: "Username or password is invalid"
            });
        }

        const payload = {
            id: user.id_user,
            username: user.username,
            role: user.role
        };

        // const token = sign(payload, SECRET || "joss", {
        //     expiresIn: "1d"
        // });

        return res.status(200).json({
            status: true,
            logged: true,
            data: payload,
            // token
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error instanceof Error ? error.message : "Server error"
        });
    }
};