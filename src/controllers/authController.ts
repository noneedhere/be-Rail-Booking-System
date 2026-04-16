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
        const { username, email, password, phone, address } = req.body;
        // Default role to CUSTOMER if not provided (for public registration)
        const role = req.body.role || 'CUSTOMER';

        // Validate required fields
        if (!username || !email || !password) {
            return res.status(400).json({
                status: false,
                message: "username, email, and password are required",
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

        // Create JWT payload for auto-login
        const payload = {
            id_user: newUser.id_user,
            email: newUser.email,
            role: newUser.role,
        };

        // Generate JWT token
        const token = jwt.sign(payload, SECRET || "joss", {
            expiresIn: "24h",
        });

        // Return user data without password + token for auto-login
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
            token,
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
 * Requires email and password
 * Returns JWT token on success
 */
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Email and password are required",
            });
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
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
                id: user.id_user,
                name: user.username,
                email: user.email,
                role: user.role,
                profile_picture: user.profile_picture || "",
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

/**
 * Verify JWT token
 * GET /auth/verify
 * 
 * Used by frontend middleware to validate tokens server-side
 * Returns user data if token is valid
 */
export const verifyToken = async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                status: false,
                message: "No token provided",
            });
        }

        const token = authHeader.substring(7);
        const decoded = jwt.verify(token, SECRET || "joss") as any;

        // Optionally verify user still exists in database
        const user = await prisma.user.findUnique({
            where: { id_user: decoded.id_user },
            select: { id_user: true, email: true, role: true }
        });

        if (!user) {
            return res.status(401).json({
                status: false,
                message: "User no longer exists",
            });
        }

        return res.status(200).json({
            status: true,
            message: "Token is valid",
            data: {
                id_user: user.id_user,
                email: user.email,
                role: user.role,
            }
        });
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Invalid or expired token",
        });
    }
};
