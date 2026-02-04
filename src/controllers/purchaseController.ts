import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

interface AuthRequest extends Request {
    user?: {
        id: number;
        username: string;
        email?: string;
        phone?: string;
    };
}

export const createTicketPurchase = async (req: AuthRequest, res: Response) => {
    try {
        const { id_schedule, buyer_name, buyer_email, buyer_phone, ticket_count } = req.body;

        if (!req.user) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. User not authenticated",
            });
        }

        if (!id_schedule) {
            return res.status(400).json({
                status: false,
                message: "id_schedule is required",
            });
        }

        const ticketCount = Number(ticket_count) || 1;

        if (ticketCount < 1) {
            return res.status(400).json({
                status: false,
                message: "At least one ticket is required",
            });
        }

        if (ticketCount > 10) {
            return res.status(400).json({
                status: false,
                message: "Maximum 10 tickets per purchase",
            });
        }

        const schedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id_schedule) },
            include: {
                train: true,
            },
        });

        if (!schedule) {
            return res.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        const currentDate = new Date();
        const departureDate = new Date(schedule.departure_date);
        const arrivalDate = new Date(schedule.arrival_date);

        if (currentDate >= arrivalDate) {
            return res.status(400).json({
                status: false,
                message: "Schedule is already completed. Ticket purchase not allowed",
            });
        }

        if (currentDate >= departureDate) {
            return res.status(400).json({
                status: false,
                message: "Ticket purchase expired. Departure date has passed",
            });
        }

        const user = await prisma.user.findUnique({
            where: { id_user: req.user.id },
        });

        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        const ticketPrice = schedule.adult_price;
        const calculatedTotalPrice = ticketCount * ticketPrice;

        const newPurchase = await prisma.ticket_purchase.create({
            data: {
                id_user: req.user.id,
                id_schedule: Number(id_schedule),
                buyer_name: buyer_name || user.username,
                buyer_email: buyer_email || user.email,
                buyer_phone: buyer_phone || user.phone,
                total_price: calculatedTotalPrice,
            },
            include: {
                schedule: {
                    include: {
                        train: true,
                    },
                },
                user: {
                    select: {
                        id_user: true,
                        username: true,
                        email: true,
                        phone: true,
                    },
                },
            },
        });

        return res.status(201).json({
            status: true,
            message: "Ticket purchase created successfully",
            data: {
                ...newPurchase,
                ticket_details: {
                    ticket_count: ticketCount,
                    price_per_ticket: ticketPrice,
                    calculated_total: calculatedTotalPrice,
                },
            },
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getMyTicketPurchases = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. User not authenticated",
            });
        }

        const purchases = await prisma.ticket_purchase.findMany({
            where: {
                id_user: req.user.id,
            },
            include: {
                schedule: {
                    include: {
                        train: true,
                    },
                },
                purchase_detail: {
                    include: {
                        seat: {
                            include: {
                                carriage: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                purchase_date: "desc",
            },
        });

        return res.status(200).json({
            status: true,
            message: "Ticket purchases retrieved successfully",
            data: purchases,
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getPurchaseById = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;

        if (!req.user) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. User not authenticated",
            });
        }

        const purchase = await prisma.ticket_purchase.findUnique({
            where: {
                id_ticketpurchase: Number(id),
            },
            include: {
                schedule: {
                    include: {
                        train: true,
                    },
                },
                user: {
                    select: {
                        id_user: true,
                        username: true,
                        email: true,
                        phone: true,
                    },
                },
                purchase_detail: {
                    include: {
                        seat: {
                            include: {
                                carriage: true,
                            },
                        },
                    },
                },
            },
        });

        if (!purchase) {
            return res.status(404).json({
                status: false,
                message: "Ticket purchase not found",
            });
        }

        if (purchase.id_user !== req.user.id) {
            return res.status(403).json({
                status: false,
                message: "Forbidden. You can only view your own purchases",
            });
        }

        return res.status(200).json({
            status: true,
            message: "Ticket purchase retrieved successfully",
            data: purchase,
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getAllPurchase = async (req: Request, res: Response) => {
    try {
        const purchases = await prisma.ticket_purchase.findMany({
            include: {
                schedule: {
                    include: {
                        train: true,
                    },
                },
                user: {
                    select: {
                        id_user: true,
                        username: true,
                        email: true,
                        phone: true,
                    },
                },
                purchase_detail: {
                    include: {
                        seat: {
                            include: {
                                carriage: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                purchase_date: "desc",
            },
        });

        return res.status(200).json({
            status: true,
            message: "All ticket purchases retrieved successfully",
            data: purchases,
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};
