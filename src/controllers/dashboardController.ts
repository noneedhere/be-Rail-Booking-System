import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

/**
 * GET /dashboard/summary
 * Returns aggregated dashboard statistics in a single optimized response.
 * All queries run in parallel for maximum performance.
 * 
 * Requires: ADMIN role
 */
export const getDashboardSummary = async (_req: Request, res: Response) => {
    try {
        const [
            totalUsers,
            totalBookings,
            revenueResult,
            activeSchedules,
            recentPurchases
        ] = await Promise.all([
            // COUNT(*) — no rows loaded
            prisma.user.count(),

            // COUNT(*) — no rows loaded
            prisma.ticket_purchase.count(),

            // SUM(total_price) — single number returned
            prisma.ticket_purchase.aggregate({
                _sum: { total_price: true },
            }),

            // COUNT(*) WHERE status = 'ACTIVED' — no rows loaded
            prisma.schedule.count({
                where: { status: "ACTIVED" },
            }),

            // Last 5 purchases with minimal relations (LIMIT 5)
            prisma.ticket_purchase.findMany({
                take: 5,
                orderBy: { purchase_date: "desc" },
                select: {
                    id_ticketpurchase: true,
                    buyer_name: true,
                    buyer_email: true,
                    total_price: true,
                    purchase_date: true,
                    schedule: {
                        select: {
                            departure: true,
                            destination: true,
                        },
                    },
                },
            }),
        ]);

        return res.status(200).json({
            status: true,
            data: {
                total_users: totalUsers,
                total_bookings: totalBookings,
                total_revenue: revenueResult._sum.total_price || 0,
                active_schedules: activeSchedules,
                recent_purchases: recentPurchases,
            },
            message: "Dashboard summary retrieved",
        });
    } catch (error) {
        console.error("[Dashboard] Error fetching summary:", error);
        return res.status(500).json({
            status: false,
            message: `Failed to retrieve dashboard summary. ${error}`,
        });
    }
};
