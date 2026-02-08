import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

export const createTicketPurchase = async (req: Request, res: Response) => {
    try {
        const { id_schedule, buyer_name, buyer_email, buyer_phone, seat_ids } = req.body;

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

        if (!seat_ids || !Array.isArray(seat_ids) || seat_ids.length === 0) {
            return res.status(400).json({
                status: false,
                message: "seat_ids is required and must be a non-empty array",
            });
        }

        if (seat_ids.length > 10) {
            return res.status(400).json({
                status: false,
                message: "Maximum 10 seats per purchase",
            });
        }

        // Validate schedule exists
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

        // Validate schedule dates
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

        // Validate user exists
        const user = await prisma.user.findUnique({
            where: { id_user: req.user.id_user },
        });

        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        // Check seat availability - all seats must be AVAILABLE for this schedule
        const seatSchedules = await prisma.seat_schedule.findMany({
            where: {
                id_schedule: Number(id_schedule),
                id_seat: {
                    in: seat_ids.map((id: any) => Number(id)),
                },
            },
            include: {
                seat: {
                    include: {
                        carriage: true,
                    },
                },
            },
        });

        // Validate all seats exist for this schedule
        if (seatSchedules.length !== seat_ids.length) {
            return res.status(400).json({
                status: false,
                message: "One or more seats do not exist for this schedule",
            });
        }


        // Check if all seats are available
        const unavailableSeats = seatSchedules.filter(
            (ss: any) => ss.seatschedule_status !== "AVAILABLE"
        );

        if (unavailableSeats.length > 0) {
            const unavailableSeatNumbers = unavailableSeats.map(
                (ss: any) => ss.seat.seat_num
            );
            return res.status(400).json({
                status: false,
                message: `The following seats are already booked: ${unavailableSeatNumbers.join(", ")}`,
            });
        }


        // Define carriage category price multipliers
        const CARRIAGE_MULTIPLIERS: Record<string, number> = {
            ECONOMY: 1.0,
            EXECUTIVE: 2.0,
            BUSINESS: 5.0
        };

        // Calculate price per seat based on carriage category
        let calculatedTotalPrice = 0;
        const seatPrices: { id_seat: number; price: number; category: string; seat_num: string }[] = [];

        for (const seatSchedule of seatSchedules) {
            const multiplier = CARRIAGE_MULTIPLIERS[seatSchedule.seat.carriage.carriage_category];
            const seatPrice = schedule.price * multiplier;
            calculatedTotalPrice += seatPrice;
            seatPrices.push({
                id_seat: seatSchedule.id_seat,
                price: seatPrice,
                category: seatSchedule.seat.carriage.carriage_category,
                seat_num: seatSchedule.seat.seat_num
            });
        }

        // Use transaction to ensure data consistency
        const result = await prisma.$transaction(async (tx: any) => {
            // Create ticket purchase
            const newPurchase = await tx.ticket_purchase.create({
                data: {
                    id_user: req.user!.id_user,
                    id_schedule: Number(id_schedule),
                    buyer_name: buyer_name || user.username,
                    buyer_email: buyer_email || user.email,
                    buyer_phone: buyer_phone || user.phone,
                    total_price: calculatedTotalPrice,
                },
            });

            // Create purchase details for each seat with correct per-seat pricing
            const purchaseDetails = [];
            for (const seatSchedule of seatSchedules) {
                const seatPriceInfo = seatPrices.find(sp => sp.id_seat === seatSchedule.id_seat)!;

                const purchaseDetail = await tx.purchase_detail.create({
                    data: {
                        id_ticket_purchase: newPurchase.id_ticketpurchase,
                        id_seat: seatSchedule.id_seat,
                        buyer_name: buyer_name || user.username,
                        buyer_email: buyer_email || user.email,
                        buyer_phone: buyer_phone || user.phone,
                        total_price: seatPriceInfo.price, // Per-seat price based on carriage category
                    },
                });
                purchaseDetails.push(purchaseDetail);

                // Update seat_schedule status to BOOKED
                await tx.seat_schedule.update({
                    where: {
                        id_seat_schedule: seatSchedule.id_seat_schedule,
                    },
                    data: {
                        seatschedule_status: "BOOKED",
                        purchaseDetailId_purchasedetail: purchaseDetail.id_purchasedetail,
                    },
                });
            }

            // Fetch complete purchase data with relations
            const completePurchase = await tx.ticket_purchase.findUnique({
                where: {
                    id_ticketpurchase: newPurchase.id_ticketpurchase,
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

            return completePurchase;
        });

        return res.status(201).json({
            status: true,
            message: "Ticket purchase created successfully",
            data: {
                id_ticketpurchase: result.id_ticketpurchase,
                purchase_date: result.purchase_date,
                buyer_name: result.buyer_name,
                buyer_email: result.buyer_email,
                buyer_phone: result.buyer_phone,
                total_price: calculatedTotalPrice,
                schedule: {
                    id_schedule: result.schedule.id_schedule,
                    schedule_name: result.schedule.schedule_name,
                    departure: result.schedule.departure,
                    destination: result.schedule.destination,
                    departure_date: result.schedule.departure_date,
                    arrival_date: result.schedule.arrival_date,
                    train_name: result.schedule.train.train_name,
                },
                tickets: result.purchase_detail.map((detail: any) => ({
                    id_purchasedetail: detail.id_purchasedetail,
                    passenger_name: detail.buyer_name,
                    seat_number: detail.seat.seat_num,
                    carriage_name: detail.seat.carriage.carriage_name,
                    carriage_category: detail.seat.carriage.carriage_category,
                    price: detail.total_price,
                })),
                price_summary: {
                    base_price_per_seat: schedule.price,
                    total_seats: seat_ids.length,
                    total_amount: calculatedTotalPrice,
                    breakdown: seatPrices.map(sp => ({
                        seat_number: sp.seat_num,
                        category: sp.category,
                        price: sp.price
                    }))
                }
            },
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getMyTicketPurchases = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. User not authenticated",
            });
        }

        const purchases = await prisma.ticket_purchase.findMany({
            where: {
                id_user: req.user.id_user,
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

export const getPurchaseById = async (req: Request, res: Response) => {
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

        if (purchase.id_user !== req.user.id_user) {
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
