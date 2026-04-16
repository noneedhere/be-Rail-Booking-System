import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { BASE_URL, SECRET } from "../global.js";
import fs from "fs";
import bcrypt from "bcrypt";
import multer from "multer";

const adapter = new PrismaMariaDb(
    {
        host: "localhost",
        port: 3306,
        database: "ukk",
    }
)

const prisma: any = new PrismaClient({ adapter });

const SALT_ROUNDS = 10;

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
                role: true,
                profile_picture: true
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
                role: true,
                profile_picture: true
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

        // Validate required fields
        if (!username || !email || !password || !phone) {
            return response.status(400).json({
                status: false,
                message: "username, email, password, and phone required",
            });
        }

        // Validate role enum
        if (role && role !== 'ADMIN' && role !== 'CUSTOMER') {
            return response.status(400).json({
                status: false,
                message: "role must be either 'ADMIN' or 'CUSTOMER'",
            });
        }

        // Check email uniqueness BEFORE creating user
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return response.status(409).json({
                status: false,
                message: "Email already registered"
            });
        }

        const nik = `NIK${Date.now()}${Math.floor(Math.random() * 1000)}`;

        // Hash password with bcrypt
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                phone,
                nik,
                role: role || 'CUSTOMER',
                profile_picture: filename || ""
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
            message: "Account created successfully",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `Failed to create account. ${error}`,
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

        // Validate role if provided
        if (role && role !== 'ADMIN' && role !== 'CUSTOMER') {
            return response.status(400).json({
                status: false,
                message: "role must be either 'ADMIN' or 'CUSTOMER'",
            });
        }

        // Hash password with bcrypt if provided
        const hashedPassword = password ? await bcrypt.hash(password, SALT_ROUNDS) : findUser.password;

        const updated = await prisma.user.update({
            where: { id_user: Number(id) },
            data: {
                username: username ?? findUser.username,
                address: address ?? findUser.address,
                phone: phone ?? findUser.phone,
                password: hashedPassword,
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

        const { id } = request.params

        const findUser = await prisma.user.findFirst({ where: { id_user: Number(id) } })
        if (!findUser) return response
            .status(404)
            .json({ status: false, message: `User is not found` })

        let filename = findUser.profile_picture
        if (request.file) {
            filename = request.file.filename
            let path = `${BASE_URL}/../public/profilePicture/${findUser.profile_picture}`
            let exists = fs.existsSync(path)
            if (exists && findUser.profile_picture !== ``) fs.unlinkSync(path)
        }

        const updatePicture = await prisma.user.update({
            data: { profile_picture: filename },
            where: { id_user: Number(id) }
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

// Authentication has been moved to authController.ts
// This function is kept for backward compatibility but should not be used
// Use POST /auth/login instead