import type { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

// WIB timezone offset (+7 hours from UTC)
const WIB_OFFSET = 7 * 60 * 60 * 1000;
function getNowWIB(): Date {
    return new Date(new Date().getTime() + WIB_OFFSET);
}

// Hold duration in seconds (5 minutes)
const HOLD_DURATION_SECONDS = 300;

// Define carriage category price multipliers
const CARRIAGE_MULTIPLIERS: Record<string, number> = {
    ECONOMY: 1.0,
    EXECUTIVE: 2.0,
    BUSINESS: 5.0
};

/**
 * Hold seats temporarily for a user.
 * Uses atomic updateMany to prevent two users from holding the same seat.
 */
export const holdSeats = async (req: Request, res: Response) => {
    try {
        const { id_schedule, seat_ids } = req.body;

        if (!req.user) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. User not authenticated",
            });
        }

        if (!id_schedule || !seat_ids || !Array.isArray(seat_ids) || seat_ids.length === 0) {
            return res.status(400).json({
                status: false,
                message: "id_schedule and seat_ids are required",
            });
        }

        const scheduleId = Number(id_schedule);
        const seatIds = seat_ids.map((id: any) => Number(id));
        const userId = req.user.id_user;
        const holdUntil = new Date(Date.now() + HOLD_DURATION_SECONDS * 1000);

        const result = await prisma.$transaction(async (tx: any) => {
            // Expire any stale holds first (best-effort cleanup within this transaction)
            await tx.seat_schedule.updateMany({
                where: {
                    id_schedule: scheduleId,
                    seatschedule_status: 'HELD',
                    held_until: { lt: new Date() },
                },
                data: {
                    seatschedule_status: 'AVAILABLE',
                    held_by: null,
                    held_until: null,
                },
            });

            // Atomically claim seats: only AVAILABLE seats or seats already held by this user
            const claimed = await tx.seat_schedule.updateMany({
                where: {
                    id_schedule: scheduleId,
                    id_seat: { in: seatIds },
                    OR: [
                        { seatschedule_status: 'AVAILABLE' },
                        { seatschedule_status: 'HELD', held_by: userId },
                    ],
                },
                data: {
                    seatschedule_status: 'HELD',
                    held_by: userId,
                    held_until: holdUntil,
                },
            });

            if (claimed.count !== seatIds.length) {
                // Find which seats are conflicting
                const allSeats = await tx.seat_schedule.findMany({
                    where: {
                        id_schedule: scheduleId,
                        id_seat: { in: seatIds },
                    },
                    include: { seat: true },
                });

                const conflicting = allSeats
                    .filter((ss: any) =>
                        ss.seatschedule_status !== 'AVAILABLE' &&
                        !(ss.seatschedule_status === 'HELD' && ss.held_by === userId)
                    )
                    .map((ss: any) => ss.seat.seat_num);

                // Throwing rolls back the entire transaction (including our updateMany)
                throw {
                    type: 'SEAT_CONFLICT',
                    seats: conflicting,
                };
            }

            return { holdUntil };
        }, { timeout: 10000 });

        return res.status(200).json({
            status: true,
            message: "Seats held successfully",
            data: {
                hold_until: result.holdUntil.toISOString(),
                hold_duration_seconds: HOLD_DURATION_SECONDS,
                seat_ids: seatIds,
            },
        });
    } catch (error: any) {
        if (error?.type === 'SEAT_CONFLICT') {
            return res.status(409).json({
                status: false,
                error_code: 'SEAT_CONFLICT',
                message: `Seats are no longer available: ${error.seats.join(', ')}`,
                conflicting_seats: error.seats,
            });
        }
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Release held seats for the current user.
 */
export const releaseSeats = async (req: Request, res: Response) => {
    try {
        const { id_schedule, seat_ids } = req.body;

        if (!req.user) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized. User not authenticated",
            });
        }

        if (!id_schedule || !seat_ids || !Array.isArray(seat_ids) || seat_ids.length === 0) {
            return res.status(400).json({
                status: false,
                message: "id_schedule and seat_ids are required",
            });
        }

        const scheduleId = Number(id_schedule);
        const seatIds = seat_ids.map((id: any) => Number(id));
        const userId = req.user.id_user;

        // Only release seats held by the current user
        await prisma.seat_schedule.updateMany({
            where: {
                id_schedule: scheduleId,
                id_seat: { in: seatIds },
                seatschedule_status: 'HELD',
                held_by: userId,
            },
            data: {
                seatschedule_status: 'AVAILABLE',
                held_by: null,
                held_until: null,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Seats released successfully",
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

/**
 * Create a ticket purchase with PESSIMISTIC LOCKING to prevent race conditions.
 *
 * Key design: The availability check AND status update happen atomically
 * inside a single transaction using updateMany with a WHERE status check.
 * InnoDB acquires row-level exclusive locks during UPDATE, so concurrent
 * transactions will either wait or find the status already changed.
 */
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

        const scheduleId = Number(id_schedule);
        const seatIds = seat_ids.map((id: any) => Number(id));
        const userId = req.user.id_user;

        // Validate schedule exists and is bookable (light pre-check outside transaction)
        const schedule = await prisma.schedule.findUnique({
            where: { id_schedule: scheduleId },
            include: { train: true },
        });

        if (!schedule) {
            return res.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        const currentDate = getNowWIB();
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
            where: { id_user: userId },
        });

        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        // ===================================================================
        // CRITICAL SECTION: All seat availability checks and mutations happen
        // inside a single transaction with atomic updateMany to prevent races.
        // ===================================================================
        const result = await prisma.$transaction(async (tx: any) => {
            // Step 1: Expire any stale holds on these seats
            await tx.seat_schedule.updateMany({
                where: {
                    id_schedule: scheduleId,
                    id_seat: { in: seatIds },
                    seatschedule_status: 'HELD',
                    held_until: { lt: new Date() },
                },
                data: {
                    seatschedule_status: 'AVAILABLE',
                    held_by: null,
                    held_until: null,
                },
            });

            // Step 2: ATOMIC CLAIM — Update seats from AVAILABLE (or HELD by this user)
            // to BOOKED. The WHERE clause ensures only claimable seats are affected.
            // InnoDB row-level locks prevent two concurrent UPDATEs from both succeeding.
            const claimed = await tx.seat_schedule.updateMany({
                where: {
                    id_schedule: scheduleId,
                    id_seat: { in: seatIds },
                    OR: [
                        { seatschedule_status: 'AVAILABLE' },
                        { seatschedule_status: 'HELD', held_by: userId },
                    ],
                },
                data: {
                    seatschedule_status: 'BOOKED',
                    held_by: null,
                    held_until: null,
                },
            });

            // Step 3: Verify all seats were claimed
            if (claimed.count !== seatIds.length) {
                // Find which seats are conflicting (for the error message)
                const currentSeats = await tx.seat_schedule.findMany({
                    where: {
                        id_schedule: scheduleId,
                        id_seat: { in: seatIds },
                    },
                    include: { seat: true },
                });

                const missing = seatIds.filter(
                    (id: number) => !currentSeats.some((ss: any) => ss.id_seat === id)
                );

                const conflicting = currentSeats
                    .filter((ss: any) =>
                        ss.seatschedule_status === 'BOOKED' &&
                        ss.purchaseDetailId_purchasedetail !== null
                    )
                    .map((ss: any) => ss.seat.seat_num);

                const heldByOthers = currentSeats
                    .filter((ss: any) =>
                        ss.seatschedule_status === 'HELD' && ss.held_by !== userId
                    )
                    .map((ss: any) => ss.seat.seat_num);

                const allConflicting = [...conflicting, ...heldByOthers];
                if (missing.length > 0) {
                    allConflicting.push(`${missing.length} seat(s) not found`);
                }

                // Throwing inside $transaction triggers automatic rollback
                // (reverts our updateMany that partially succeeded)
                throw {
                    type: 'SEAT_CONFLICT',
                    seats: allConflicting,
                    message: `Seats are no longer available: ${allConflicting.join(', ')}`,
                };
            }

            // Step 4: Fetch the now-BOOKED seat_schedule records with carriage info for pricing
            const bookedSeatSchedules = await tx.seat_schedule.findMany({
                where: {
                    id_schedule: scheduleId,
                    id_seat: { in: seatIds },
                },
                include: {
                    seat: {
                        include: { carriage: true },
                    },
                },
            });

            // Step 5: Calculate prices
            let calculatedTotalPrice = 0;
            const seatPrices: { id_seat: number; price: number; category: string; seat_num: string }[] = [];

            for (const ss of bookedSeatSchedules) {
                const multiplier = CARRIAGE_MULTIPLIERS[ss.seat.carriage.carriage_category] || 1.0;
                const seatPrice = schedule.price * multiplier;
                calculatedTotalPrice += seatPrice;
                seatPrices.push({
                    id_seat: ss.id_seat,
                    price: seatPrice,
                    category: ss.seat.carriage.carriage_category,
                    seat_num: ss.seat.seat_num,
                });
            }

            // Step 6: Create ticket purchase
            const newPurchase = await tx.ticket_purchase.create({
                data: {
                    id_user: userId,
                    id_schedule: scheduleId,
                    buyer_name: buyer_name || user.username,
                    buyer_email: buyer_email || user.email,
                    buyer_phone: buyer_phone || user.phone,
                    total_price: calculatedTotalPrice,
                },
            });

            // Step 7: Create purchase details and link to seat_schedules
            for (const ss of bookedSeatSchedules) {
                const seatPriceInfo = seatPrices.find(sp => sp.id_seat === ss.id_seat)!;

                const purchaseDetail = await tx.purchase_detail.create({
                    data: {
                        id_ticket_purchase: newPurchase.id_ticketpurchase,
                        id_seat: ss.id_seat,
                        buyer_name: buyer_name || user.username,
                        buyer_email: buyer_email || user.email,
                        buyer_phone: buyer_phone || user.phone,
                        total_price: seatPriceInfo.price,
                    },
                });

                // Link seat_schedule to purchase_detail
                await tx.seat_schedule.update({
                    where: { id_seat_schedule: ss.id_seat_schedule },
                    data: {
                        purchaseDetailId_purchasedetail: purchaseDetail.id_purchasedetail,
                    },
                });
            }

            // Step 8: Fetch complete purchase with relations
            const completePurchase = await tx.ticket_purchase.findUnique({
                where: { id_ticketpurchase: newPurchase.id_ticketpurchase },
                include: {
                    schedule: { include: { train: true } },
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
                            seat: { include: { carriage: true } },
                        },
                    },
                },
            });

            return { completePurchase, calculatedTotalPrice, seatPrices };
        }, { timeout: 15000 });

        return res.status(201).json({
            status: true,
            message: "Ticket purchase created successfully",
            data: {
                id_ticketpurchase: result.completePurchase.id_ticketpurchase,
                purchase_date: result.completePurchase.purchase_date,
                buyer_name: result.completePurchase.buyer_name,
                buyer_email: result.completePurchase.buyer_email,
                buyer_phone: result.completePurchase.buyer_phone,
                total_price: result.calculatedTotalPrice,
                schedule: {
                    id_schedule: result.completePurchase.schedule.id_schedule,
                    schedule_name: result.completePurchase.schedule.schedule_name,
                    departure: result.completePurchase.schedule.departure,
                    destination: result.completePurchase.schedule.destination,
                    departure_date: result.completePurchase.schedule.departure_date,
                    arrival_date: result.completePurchase.schedule.arrival_date,
                    train_name: result.completePurchase.schedule.train.train_name,
                },
                tickets: result.completePurchase.purchase_detail.map((detail: any) => ({
                    id_purchasedetail: detail.id_purchasedetail,
                    passenger_name: detail.buyer_name,
                    seat_number: detail.seat.seat_num,
                    carriage_name: detail.seat.carriage.carriage_name,
                    carriage_category: detail.seat.carriage.carriage_category,
                    price: detail.total_price,
                })),
                price_summary: {
                    base_price_per_seat: schedule.price,
                    total_seats: seatIds.length,
                    total_amount: result.calculatedTotalPrice,
                    breakdown: result.seatPrices.map((sp: any) => ({
                        seat_number: sp.seat_num,
                        category: sp.category,
                        price: sp.price
                    }))
                }
            },
        });
    } catch (error: any) {
        // Handle seat conflict errors with proper 409 status
        if (error?.type === 'SEAT_CONFLICT') {
            return res.status(409).json({
                status: false,
                error_code: 'SEAT_CONFLICT',
                message: error.message || 'One or more seats are no longer available',
                conflicting_seats: error.seats || [],
            });
        }
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

        // Access control: Admin can view any purchase, customers can only view their own
        if (req.user.role !== 'ADMIN' && purchase.id_user !== req.user.id_user) {
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

export const deletePurchase = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const purchaseId = Number(id);

        const purchase = await prisma.ticket_purchase.findUnique({
            where: { id_ticketpurchase: purchaseId },
            include: { purchase_detail: true },
        });

        if (!purchase) {
            return res.status(404).json({
                status: false,
                message: "Ticket purchase not found",
            });
        }

        await prisma.$transaction(async (tx: any) => {
            // Reset seat_schedule status back to AVAILABLE
            const detailIds = purchase.purchase_detail.map((d: any) => d.id_purchasedetail);
            if (detailIds.length > 0) {
                await tx.seat_schedule.updateMany({
                    where: { purchaseDetailId_purchasedetail: { in: detailIds } },
                    data: {
                        seatschedule_status: "AVAILABLE",
                        purchaseDetailId_purchasedetail: null,
                        held_by: null,
                        held_until: null,
                    },
                });
            }

            // Delete purchase details then the purchase
            await tx.purchase_detail.deleteMany({ where: { id_ticket_purchase: purchaseId } });
            await tx.ticket_purchase.delete({ where: { id_ticketpurchase: purchaseId } });
        });

        return res.status(200).json({
            status: true,
            message: "Ticket purchase deleted successfully",
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};
