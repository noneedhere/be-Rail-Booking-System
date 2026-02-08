import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../global.js";

interface AuthRequest extends Request {
    user?: {
        id: number;
        username: string;
        email?: string;
        phone?: string;
    };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. No token provided",
            });
        }

        // Extract token (remove "Bearer " prefix)
        const token = authHeader.substring(7);

        // Verify token
        const decoded = jwt.verify(token, SECRET || "joss") as any;

        // Attach user to request
        req.user = {
            id: decoded.id,
            username: decoded.username,
            email: decoded.email,
            phone: decoded.phone,
        };

        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Invalid or expired token",
        });
    }
};
