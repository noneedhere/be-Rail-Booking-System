import type { Request, Response, NextFunction } from "express";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id_user: number;
                email: string;
                role: 'ADMIN' | 'CUSTOMER';
            };
        }
    }
}

export { };
