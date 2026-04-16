import type { Request, Response, NextFunction } from "express";

/**
 * Role-based authorization middleware
 * Checks if the authenticated user has one of the allowed roles
 * 
 * @param allowedRoles - Variable number of roles that are permitted to access the route
 * @returns Express middleware function
 * 
 * @example
 * // Admin only route
 * app.get('/admin/users', authMiddleware, roleGuard('ADMIN'), controller);
 * 
 * // Both admin and customer can access
 * app.get('/schedules', authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), controller);
 */
export const roleGuard = (...allowedRoles: Array<'ADMIN' | 'CUSTOMER'>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            // Check if user is authenticated (should be set by authMiddleware)
            if (!req.user) {
                return res.status(401).json({
                    status: false,
                    message: "Unauthorized. Authentication required",
                });
            }

            // Check if user's role is in the allowed roles
            if (!allowedRoles.includes(req.user.role)) {
                return res.status(403).json({
                    status: false,
                    message: `Forbidden. Required role: ${allowedRoles.join(' or ')}. Your role: ${req.user.role}`,
                });
            }

            // User has required role, proceed
            next();
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Authorization error",
            });
        }
    };
};
