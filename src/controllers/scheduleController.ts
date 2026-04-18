import type { Request, Response } from "express";
import { PrismaClient, status, train_status } from "../../generated/prisma/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    database: "ukk",
});

const prisma: any = new PrismaClient({ adapter });

// WIB timezone offset (+7 hours from UTC)
const WIB_OFFSET = 7 * 60 * 60 * 1000;

// Helper function to get current time in WIB timezone
function getNowWIB(): Date {
    const now = new Date();
    return new Date(now.getTime() + WIB_OFFSET);
}

// Helper function to update train status based on active schedules
async function updateTrainStatus(trainId: number, tx: any) {
    const nowWIB = getNowWIB();
    const activeSchedules = await tx.schedule.count({
        where: {
            id_train: trainId,
            status: 'ACTIVED',
            arrival_date: { gte: nowWIB }
        }
    });

    const newStatus = activeSchedules > 0 ? 'ACTIVE' : 'AVAILABLE';

    await tx.train.update({
        where: { id_train: trainId },
        data: { train_status: newStatus }
    });
}

/**
 * Get current server time in WIB timezone.
 * Used for frontend time synchronization.
 */
export const getServerTime = async (_request: Request, response: Response) => {
    try {
        const nowWIB = getNowWIB();
        return response.status(200).json({
            status: true,
            data: {
                timestamp: nowWIB.toISOString(),
                timezone: 'WIB (UTC+7)',
                unix: Math.floor(nowWIB.getTime() / 1000)
            },
            message: 'Server time retrieved'
        });
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: `Failed to get server time. ${error}`
        });
    }
};

export const getAllSchedule = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        // Auto-expire: Mark past schedules as FINISHED and update train status
        const expiredSchedules = await prisma.schedule.findMany({
            where: {
                status: "ACTIVED",
                arrival_date: { lt: getNowWIB() }
            },
            select: { id_schedule: true, id_train: true }
        });

        if (expiredSchedules.length > 0) {
            // Get unique train IDs
            const trainIds = [...new Set(expiredSchedules.map((s: any) => s.id_train))];

            await prisma.$transaction(async (tx: any) => {
                // Mark expired schedules as FINISHED
                await tx.schedule.updateMany({
                    where: {
                        status: "ACTIVED",
                        arrival_date: { lt: getNowWIB() }
                    },
                    data: { status: "FINISHED" }
                });

                // Update train status for affected trains
                for (const trainId of trainIds) {
                    await updateTrainStatus(trainId as number, tx);
                }
            });
        }

        const schedules = await prisma.schedule.findMany({
            where: {
                OR: [
                    {
                        schedule_name: {
                            contains: search?.toString() || "",
                        },
                    },
                    {
                        departure: {
                            contains: search?.toString() || "",
                        },
                    },
                    {
                        destination: {
                            contains: search?.toString() || "",
                        },
                    },
                ],
            },
        });

        return response.status(200).json({
            status: true,
            data: schedules,
            message: "Schedule has retrieved",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const getScheduleById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const schedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id) },
        });

        if (!schedule) {
            return response.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        return response.status(200).json({
            status: true,
            data: schedule,
            message: "Schedule found",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

export const createSchedule = async (request: Request, response: Response) => {
    try {
        const {
            schedule_name,
            departure,
            destination,
            departure_date,
            arrival_date,
            price,
            id_train,
        } = request.body

        if (
            !schedule_name ||
            !departure ||
            !destination ||
            !departure_date ||
            !arrival_date ||
            !price ||
            !id_train
        ) {
            return response.status(400).json({
                status: false,
                message: "All required fields must be filled (schedule_name, departure, destination, departure_date, arrival_date, price, id_train)",
            })
        }

        const priceFloat = parseFloat(price)
        const departureDate = new Date(departure_date)
        const arrivalDate = new Date(arrival_date)
        const now = new Date();

        if (departureDate < now) {
            return response.status(400).json({
                status: false,
                message: "Departure date cannot be in the past"
            });
        }

        if (arrivalDate <= departureDate) {
            return response.status(400).json({
                status: false,
                message: "Arrival date must be after departure date"
            });
        }


        const conflictSchedule = await prisma.schedule.findFirst({
            where: {
                id_train: Number(id_train),
                status: "ACTIVED",
                AND: [
                    {
                        departure_date: { lt: arrivalDate },
                    },
                    {
                        arrival_date: { gt: departureDate },
                    },
                ],
            },
        })

        if (conflictSchedule) {
            return response.status(409).json({
                status: false,
                message:
                    "Train is already assigned to another schedule during this time",
            })
        }

        const train = await prisma.train.findUnique({
            where: { id_train: Number(id_train) },
        })

        if (!train) {
            return response.status(404).json({
                status: false,
                message: "Train not found",
            })
        }

        const totalQuota = await prisma.seat.count({
            where: {
                carriage: {
                    id_train: Number(id_train),
                },
            },
        })

        if (totalQuota === 0) {
            return response.status(400).json({
                status: false,
                message: "Train has no seats",
            })
        }

        await prisma.schedule.updateMany({
            where: {
                status: "ACTIVED",
                arrival_date: { lt: now },
            },
            data: { status: "FINISHED" },
        })

        // audit_report no 16 - Fixed: Now using transaction to create seat_schedule entries

        const schedule = await prisma.$transaction(async (tx: any) => {
            // Create the schedule
            const newSchedule = await tx.schedule.create({
                data: {
                    schedule_name,
                    departure,
                    destination,
                    departure_date: departureDate,
                    arrival_date: arrivalDate,
                    price: priceFloat,
                    quota_total: totalQuota,
                    status: "ACTIVED",
                    train: {
                        connect: { id_train: Number(id_train) },
                    },
                },
            });

            // Get all seats for this train
            const seats = await tx.seat.findMany({
                where: {
                    carriage: {
                        id_train: Number(id_train)
                    }
                }
            });

            // Create seat_schedule for each seat (marks all seats as AVAILABLE)
            if (seats.length > 0) {
                await tx.seat_schedule.createMany({
                    data: seats.map((seat: any) => ({
                        id_seat: seat.id_seat,
                        id_schedule: newSchedule.id_schedule,
                        seatschedule_status: 'AVAILABLE'
                    }))
                });
            }

            // Update train status to ACTIVE
            await updateTrainStatus(Number(id_train), tx);

            return newSchedule;
        })

        return response.status(201).json({
            status: true,
            data: schedule,
            message: "Schedule has created",
        })
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        })
    }
}



export const updateSchedule = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const existingSchedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id) },
        });

        if (!existingSchedule) {
            return response.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        const {
            schedule_name,
            departure_date,
            arrival_date,
            price,
            status,
            id_train,
        } = request.body;

        // Check if schedule is ACTIVE and has bookings
        if (existingSchedule.status === 'ACTIVED') {
            const hasBookings = await prisma.seat_schedule.count({
                where: {
                    id_schedule: Number(id),
                    seatschedule_status: 'BOOKED'
                }
            });

            // If active with bookings, only allow name, price, and status changes
            if (hasBookings > 0) {
                if (departure_date || arrival_date || id_train) {
                    return response.status(409).json({
                        status: false,
                        message: "Cannot modify dates or train for an active schedule with bookings. Only name, price, and status can be updated."
                    });
                }
            }
        }

        // Convert price to float if provided
        const priceFloat = price !== undefined ? parseFloat(price) : undefined;

        const result = await prisma.$transaction(async (tx: any) => {
            const updatedSchedule = await tx.schedule.update({
                where: { id_schedule: Number(id) },
                data: {
                    ...(schedule_name && { schedule_name }),
                    ...(departure_date && {
                        departure_date: new Date(departure_date),
                    }),
                    ...(arrival_date && {
                        arrival_date: new Date(arrival_date),
                    }),
                    ...(priceFloat !== undefined && { price: priceFloat }),
                    ...(status && { status }),
                },
            });

            // If status changed to FINISHED or CANCELLED, update train status
            if (status && (status === 'FINISHED' || status === 'CANCELLED')) {
                await updateTrainStatus(existingSchedule.id_train, tx);
            }

            return updatedSchedule;
        });

        return response.status(200).json({
            status: true,
            message: "Schedule has updated",
            data: result,
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
}

/**
 * Get schedules formatted for customer schedule page.
 * Returns data in exact format required by frontend.
 */
export const getCustomerSchedules = async (request: Request, response: Response) => {
    try {
        // Auto-expire: Mark past schedules as FINISHED and update train status
        const expiredSchedules = await prisma.schedule.findMany({
            where: {
                status: "ACTIVED",
                arrival_date: { lt: getNowWIB() }
            },
            select: { id_schedule: true, id_train: true }
        });

        if (expiredSchedules.length > 0) {
            const trainIds = [...new Set(expiredSchedules.map((s: any) => s.id_train))];

            await prisma.$transaction(async (tx: any) => {
                await tx.schedule.updateMany({
                    where: {
                        status: "ACTIVED",
                        arrival_date: { lt: getNowWIB() }
                    },
                    data: { status: "FINISHED" }
                });

                for (const trainId of trainIds) {
                    await updateTrainStatus(trainId as number, tx);
                }
            });
        }

        // Fetch only active schedules for customers
        const schedules = await prisma.schedule.findMany({
            where: {
                status: "ACTIVED",
                departure_date: { gte: getNowWIB() }
            },
            orderBy: {
                departure_date: 'asc'
            }
        });

        // Format schedules for frontend consumption
        const formattedSchedules = schedules.map((schedule: any) => {
            const departureDate = new Date(schedule.departure_date);
            const arrivalDate = new Date(schedule.arrival_date);

            // Calculate duration
            const durationMs = arrivalDate.getTime() - departureDate.getTime();
            const hours = Math.floor(durationMs / (1000 * 60 * 60));
            const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
            const duration = `${hours}j ${minutes}m`;

            // Format time (HH:mm)
            const formatTime = (date: Date): string => {
                const h = date.getHours().toString().padStart(2, '0');
                const m = date.getMinutes().toString().padStart(2, '0');
                return `${h}:${m}`;
            };

            // Format date (DD MMM YYYY)
            const formatDate = (date: Date): string => {
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const d = date.getDate().toString().padStart(2, '0');
                const m = months[date.getMonth()];
                const y = date.getFullYear();
                return `${d} ${m} ${y}`;
            };

            return {
                id: schedule.id_schedule,
                name: schedule.schedule_name,
                departureTime: formatTime(departureDate),
                departureDate: formatDate(departureDate),
                arrivalTime: formatTime(arrivalDate),
                arrivalDate: formatDate(arrivalDate),
                duration: duration,
                price: schedule.price
            };
        });

        return response.status(200).json({
            schedules: formattedSchedules
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`
        });
    }
};

/**
 * Get unique station names from all schedules.
 * Returns deduplicated list of departure and destination values for autocomplete.
 */
export const getStations = async (_request: Request, response: Response) => {
    try {
        const departures = await prisma.schedule.findMany({
            select: { departure: true },
            distinct: ['departure']
        });

        const destinations = await prisma.schedule.findMany({
            select: { destination: true },
            distinct: ['destination']
        });

        // Merge and deduplicate
        const stationSet = new Set<string>();
        departures.forEach((d: any) => stationSet.add(d.departure));
        destinations.forEach((d: any) => stationSet.add(d.destination));

        const stations = Array.from(stationSet).sort();

        return response.status(200).json({
            status: true,
            data: stations,
            message: 'Stations retrieved'
        });
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: `Failed to get stations. ${error}`
        });
    }
};

/**
 * Search schedules by departure, arrival, date, and guest count.
 * Returns filtered active schedules matching criteria.
 */
export const searchSchedules = async (request: Request, response: Response) => {
    try {
        const { departure, arrival, date, guests } = request.query;

        if (!departure || !arrival || !date) {
            return response.status(400).json({
                status: false,
                message: 'departure, arrival, and date are required'
            });
        }

        if (departure.toString().toLowerCase() === arrival.toString().toLowerCase()) {
            return response.status(400).json({
                status: false,
                message: 'Departure and arrival cannot be the same'
            });
        }

        // Auto-expire past schedules
        const expiredSchedules = await prisma.schedule.findMany({
            where: {
                status: "ACTIVED",
                arrival_date: { lt: getNowWIB() }
            },
            select: { id_schedule: true, id_train: true }
        });

        if (expiredSchedules.length > 0) {
            const trainIds = [...new Set(expiredSchedules.map((s: any) => s.id_train))];
            await prisma.$transaction(async (tx: any) => {
                await tx.schedule.updateMany({
                    where: {
                        status: "ACTIVED",
                        arrival_date: { lt: getNowWIB() }
                    },
                    data: { status: "FINISHED" }
                });
                for (const trainId of trainIds) {
                    await updateTrainStatus(trainId as number, tx);
                }
            });
        }

        // Build date range for the selected day (start of day to end of day)
        const searchDate = new Date(date.toString());
        const startOfDay = new Date(searchDate);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(searchDate);
        endOfDay.setHours(23, 59, 59, 999);

        const guestCount = guests ? Number(guests) : 1;

        const schedules = await prisma.schedule.findMany({
            where: {
                status: "ACTIVED",
                departure: { contains: departure.toString() },
                destination: { contains: arrival.toString() },
                departure_date: {
                    gte: startOfDay,
                    lte: endOfDay
                },
                quota_total: { gte: guestCount }
            },
            orderBy: {
                departure_date: 'asc'
            }
        });

        const message = schedules.length > 0
            ? `${schedules.length} schedule${schedules.length !== 1 ? 's' : ''} found`
            : 'No schedules found for your criteria';

        return response.status(200).json({
            status: true,
            data: schedules,
            message
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`
        });
    }
};

export const deleteSchedule = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const schedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id) },
        });

        if (!schedule) {
            return response.status(404).json({
                status: false,
                message: "Schedule not found",
            });
        }

        // Block deletion of ACTIVE schedules with bookings
        if (schedule.status === 'ACTIVED') {
            const hasBookings = await prisma.seat_schedule.count({
                where: {
                    id_schedule: Number(id),
                    seatschedule_status: 'BOOKED'
                }
            });

            if (hasBookings > 0) {
                return response.status(409).json({
                    status: false,
                    message: "Cannot delete an active schedule with bookings. Change status to CANCELLED first or wait until schedule is FINISHED."
                });
            }
        }

        await prisma.$transaction(async (tx: any) => {
            // Delete all seat_schedule entries for this schedule
            await tx.seat_schedule.deleteMany({
                where: { id_schedule: Number(id) }
            });

            // Delete all purchase details and purchases related to this schedule
            const purchases = await tx.ticket_purchase.findMany({
                where: { id_schedule: Number(id) },
                select: { id_ticketpurchase: true }
            });

            if (purchases.length > 0) {
                const purchaseIds = purchases.map((p: any) => p.id_ticketpurchase);
                await tx.purchase_detail.deleteMany({
                    where: { id_ticket_purchase: { in: purchaseIds } }
                });
                await tx.ticket_purchase.deleteMany({
                    where: { id_schedule: Number(id) }
                });
            }

            await tx.schedule.delete({
                where: { id_schedule: Number(id) },
            });

            // Update train status after deleting schedule
            await updateTrainStatus(schedule.id_train, tx);
        });

        return response.status(200).json({
            status: true,
            message: "Schedule has deleted",
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`,
        });
    }
};

// Layout configuration per carriage category
const CARRIAGE_LAYOUT_CONFIG: Record<string, { columns: number; aisleAfter: number }> = {
    EXECUTIVE: { columns: 4, aisleAfter: 2 },
    BUSINESS: { columns: 4, aisleAfter: 2 },
    ECONOMY: { columns: 6, aisleAfter: 3 }
};

// Price multipliers per carriage category
const CARRIAGE_PRICE_MULTIPLIERS: Record<string, number> = {
    ECONOMY: 1.0,
    BUSINESS: 5.0,
    EXECUTIVE: 2.0
};

/**
 * Get seat mapping for a schedule.
 * Returns structured seat data per carriage for rendering seat map.
 */
export const getSeatMappingBySchedule = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        // Get schedule with train info
        const schedule = await prisma.schedule.findUnique({
            where: { id_schedule: Number(id) },
            include: {
                train: {
                    include: {
                        carriage: {
                            orderBy: { carriage_name: 'asc' },
                            include: {
                                seat: {
                                    orderBy: { seat_num: 'asc' }
                                }
                            }
                        }
                    }
                }
            }
        });

        if (!schedule) {
            return response.status(404).json({
                status: false,
                message: "Schedule not found"
            });
        }

        // Get all seat_schedule entries for this schedule to check availability
        const seatSchedules = await prisma.seat_schedule.findMany({
            where: { id_schedule: Number(id) },
            select: {
                id_seat: true,
                seatschedule_status: true
            }
        });

        // Create a map for quick lookup of seat status
        const seatStatusMap = new Map<number, string>();
        seatSchedules.forEach((ss: any) => {
            seatStatusMap.set(ss.id_seat, ss.seatschedule_status);
        });

        // Build carriage mapping data
        const carriages = schedule.train.carriage.map((carriage: any) => {
            const layoutConfig = CARRIAGE_LAYOUT_CONFIG[carriage.carriage_category] || CARRIAGE_LAYOUT_CONFIG.ECONOMY;
            const priceMultiplier = CARRIAGE_PRICE_MULTIPLIERS[carriage.carriage_category] || 1.0;
            const seatPrice = schedule.price * priceMultiplier;
            const rows = Math.ceil(carriage.seat.length / layoutConfig.columns);

            // Map seats with row/col positions and status
            const seats = carriage.seat.map((seat: any, index: number) => {
                const row = Math.floor(index / layoutConfig.columns) + 1;
                const col = (index % layoutConfig.columns) + 1;
                const status = seatStatusMap.get(seat.id_seat) || 'UNAVAILABLE';

                return {
                    id_seat: seat.id_seat,
                    seat_num: seat.seat_num,
                    row,
                    col,
                    status
                };
            });

            return {
                id_carriage: carriage.id_carriage,
                carriage_name: carriage.carriage_name,
                carriage_category: carriage.carriage_category,
                quota: carriage.quota,
                price_multiplier: priceMultiplier,
                seat_price: seatPrice,
                layout: {
                    columns: layoutConfig.columns,
                    rows,
                    aisle_after: layoutConfig.aisleAfter
                },
                seats
            };
        });

        // Count available and booked seats
        const totalSeats = carriages.reduce((sum: number, c: any) => sum + c.seats.length, 0);
        const availableSeats = carriages.reduce((sum: number, c: any) =>
            sum + c.seats.filter((s: any) => s.status === 'AVAILABLE').length, 0);
        const bookedSeats = totalSeats - availableSeats;

        return response.status(200).json({
            status: true,
            data: {
                schedule: {
                    id_schedule: schedule.id_schedule,
                    schedule_name: schedule.schedule_name,
                    departure: schedule.departure,
                    destination: schedule.destination,
                    departure_date: schedule.departure_date,
                    arrival_date: schedule.arrival_date,
                    base_price: schedule.price,
                    status: schedule.status
                },
                train: {
                    id_train: schedule.train.id_train,
                    train_name: schedule.train.train_name
                },
                summary: {
                    total_seats: totalSeats,
                    available_seats: availableSeats,
                    booked_seats: bookedSeats
                },
                carriages
            },
            message: "Seat mapping retrieved successfully"
        });
    } catch (error) {
        return response.status(400).json({
            status: false,
            message: `There is an error. ${error}`
        });
    }
};
