import cron from 'node-cron';
import { PrismaClient } from '../../generated/prisma/index.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
    host: 'localhost',
    port: 3306,
    database: 'ukk',
});

const prisma: any = new PrismaClient({ adapter });

// WIB timezone offset (+7 hours from UTC)
const WIB_OFFSET = 7 * 60 * 60 * 1000;

function getNowWIB(): Date {
    return new Date(new Date().getTime() + WIB_OFFSET);
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
 * Auto-expire schedules that have passed their arrival date.
 * This function is called by the cron job every minute.
 */
async function expireSchedules(): Promise<void> {
    try {
        const nowWIB = getNowWIB();

        // Find all expired schedules that are still ACTIVED
        const expiredSchedules = await prisma.schedule.findMany({
            where: {
                status: 'ACTIVED',
                arrival_date: { lt: nowWIB }
            },
            select: { id_schedule: true, id_train: true, schedule_name: true }
        });

        if (expiredSchedules.length === 0) {
            return; // Nothing to expire
        }

        // Get unique train IDs
        const trainIds = [...new Set(expiredSchedules.map((s: any) => s.id_train))];

        await prisma.$transaction(async (tx: any) => {
            // Mark expired schedules as FINISHED
            await tx.schedule.updateMany({
                where: {
                    status: 'ACTIVED',
                    arrival_date: { lt: nowWIB }
                },
                data: { status: 'FINISHED' }
            });

            // Update train status for affected trains
            for (const trainId of trainIds) {
                await updateTrainStatus(trainId as number, tx);
            }
        });

        // Log the expiration
        console.log(`[${new Date().toISOString()}] [CRON] Expired ${expiredSchedules.length} schedule(s):`);
        expiredSchedules.forEach((s: any) => {
            console.log(`  - Schedule "${s.schedule_name}" (ID: ${s.id_schedule}) marked as FINISHED`);
        });

    } catch (error) {
        console.error(`[${new Date().toISOString()}] [CRON ERROR] Failed to expire schedules:`, error);
    }
}

/**
 * Initialize the schedule auto-expiration cron job.
 * Runs every minute to check for expired schedules.
 */
export function initScheduleAutoExpire(): void {
    // Run every minute: '* * * * *'
    cron.schedule('* * * * *', async () => {
        await expireSchedules();
    });

    console.log('[CRON] Schedule auto-expiration service initialized (runs every minute)');

    // Run once immediately on startup to catch any pending expirations
    expireSchedules().then(() => {
        console.log('[CRON] Initial schedule expiration check completed');
    }).catch((error) => {
        console.error('[CRON] Initial schedule expiration check failed:', error);
    });
}

/**
 * Get current server time in WIB timezone.
 * Used for server time sync endpoint.
 */
export function getServerTimeWIB(): { timestamp: string; timezone: string; unix: number } {
    const nowWIB = getNowWIB();
    return {
        timestamp: nowWIB.toISOString(),
        timezone: 'WIB (UTC+7)',
        unix: Math.floor(nowWIB.getTime() / 1000)
    };
}
