import express from "express"
import {
    getAllSchedule,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule,
    getServerTime,
    getCustomerSchedules,
    getSeatMappingBySchedule,
    getStations,
    searchSchedules,
} from "../controllers/scheduleController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"

import multer from "multer"

const router = express.Router()



const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "public/profilePicture")
    },
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

// Public route (no auth required)
router.get("/server-time", getServerTime)

// Protected routes
router.get("/customer", authMiddleware, roleGuard('CUSTOMER', 'ADMIN'), getCustomerSchedules)
router.get("/stations", authMiddleware, roleGuard('CUSTOMER', 'ADMIN'), getStations)
router.get("/search", authMiddleware, roleGuard('CUSTOMER', 'ADMIN'), searchSchedules)

router.get("/", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getAllSchedule)

// CHANGED: Using /seatmapping/:id pattern to avoid Express 5.x routing issues
router.get("/seatmapping/:id", authMiddleware, roleGuard('CUSTOMER', 'ADMIN'), getSeatMappingBySchedule)

router.get("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getScheduleById)

router.post("/", authMiddleware, roleGuard('ADMIN'), upload.none(), createSchedule)
router.put("/:id", authMiddleware, roleGuard('ADMIN'), upload.none(), updateSchedule)
router.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteSchedule)

export default router
