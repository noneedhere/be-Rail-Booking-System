import type { Request, Response, NextFunction } from "express";

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
        // For now, this is a placeholder middleware
        // You should implement proper JWT token verification here

        // Example: Get user from header or session
        const userId = req.headers['x-user-id'];
        const username = req.headers['x-username'];
        const email = req.headers['x-user-email'];
        const phone = req.headers['x-user-phone'];

        if (!userId) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. Please provide user credentials",
            });
        }

        // Attach user to request
        req.user = {
            id: Number(userId),
            username: username as string || "Unknown",
            email: email as string,
            phone: phone as string,
        };

        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Authentication failed",
        });
    }
};
