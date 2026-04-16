import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../global.js";

/**
 * Authentication middleware
 * Verifies JWT token from Authorization header and attaches user data to request
 * 
 * @example
 * app.get('/protected', authMiddleware, controller);
 */
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            console.log("No valid token provided");
            return res.status(401).json({
                status: false,
                message: "Unauthorized. No token provided",
            });
        }

        const token = authHeader.substring(7);

        const decoded = jwt.verify(token, SECRET || "joss") as any;
        console.log('Token verified, user:', decoded.email, 'role:', decoded.role);

        req.user = {
            id_user: decoded.id_user,
            email: decoded.email,
            role: decoded.role,
        };

        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Invalid or expired token",
        });
    }
};
