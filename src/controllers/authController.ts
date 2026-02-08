import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { SECRET } from "../global.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

const SALT_ROUNDS = 10;

/**
 * Register a new user
 * POST /auth/register
 * 
 * Required fields: username, email, password, role
 * Optional fields: phone, address, profile_picture
 */
export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password, role, phone, address } = req.body;

        // Validate required fields
        if (!username || !email || !password || !role) {
            return res.status(400).json({
                status: false,
                message: "username, email, password, and role are required",
            });
        }

        // Validate role enum
        if (role !== 'ADMIN' && role !== 'CUSTOMER') {
            return res.status(400).json({
                status: false,
                message: "role must be either 'ADMIN' or 'CUSTOMER'",
            });
        }

        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(409).json({
                status: false,
                message: "Email already registered",
            });
        }

        // Hash password with bcrypt
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Generate unique NIK
        const nik = `NIK${Date.now()}${Math.floor(Math.random() * 1000)}`;

        // Create new user
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role,
                nik,
                phone: phone || "",
                address: address || "",
                profile_picture: "",
            },
        });

        // Return user data without password
        return res.status(201).json({
            status: true,
            message: "User registered successfully",
            data: {
                id_user: newUser.id_user,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
                phone: newUser.phone,
                address: newUser.address,
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: `Registration failed. ${error}`,
        });
    }
};

/**
 * Login user
 * POST /auth/login
 * 
 * Accepts either email or username with password
 * Returns JWT token on success
 */
export const login = async (req: Request, res: Response) => {
    try {
        const { email, username, password } = req.body;

        // Validate that either email or username is provided
        if ((!email && !username) || !password) {
            return res.status(400).json({
                status: false,
                message: "Email or username, and password are required",
            });
        }

        // Find user by email or username
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    email ? { email } : {},
                    username ? { username } : {},
                ],
            },
        });

        if (!user) {
            return res.status(401).json({
                status: false,
                logged: false,
                message: "Invalid credentials",
            });
        }

        // Verify password with bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: false,
                logged: false,
                message: "Invalid credentials",
            });
        }

        // Create JWT payload
        const payload = {
            id_user: user.id_user,
            email: user.email,
            role: user.role,
        };

        // Generate JWT token
        const token = jwt.sign(payload, SECRET || "joss", {
            expiresIn: "24h",
        });

        return res.status(200).json({
            status: true,
            logged: true,
            message: "Login successful",
            data: {
                id_user: user.id_user,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: `Login failed. ${error}`,
        });
    }
};
