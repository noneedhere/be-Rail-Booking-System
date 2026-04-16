import express from "express"
import {
    getAllSeat,
    getSeatById,
    createSeat,
    updateSeat,
    deleteSeat,
} from "../controllers/seatController.js"
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

// All seat routes are admin-only (CRUD operations)
app.get("/", authMiddleware, roleGuard('ADMIN'), getAllSeat)
app.get("/:id", authMiddleware, roleGuard('ADMIN'), getSeatById)
app.post("/", authMiddleware, roleGuard('ADMIN'), upload.none(), createSeat)
app.put("/:id", authMiddleware, roleGuard('ADMIN'), upload.none(), updateSeat)
app.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteSeat)
export default app
