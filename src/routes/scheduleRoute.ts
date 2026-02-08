import express from "express"
import {
    getAllSchedule,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule,
} from "../controllers/scheduleController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"

import multer from "multer"
import path from "path"

const app = express()

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "public/profilePicture")
    },
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

// View schedules - authenticated users (both admin and customer)
app.get("/", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getAllSchedule)
app.get("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getScheduleById)

// CRUD operations - admin only
app.post("/", authMiddleware, roleGuard('ADMIN'), upload.none(), createSchedule)
app.put("/:id", authMiddleware, roleGuard('ADMIN'), upload.none(), updateSchedule)
app.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteSchedule)
export default app
