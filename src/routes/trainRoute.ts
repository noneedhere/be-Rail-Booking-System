import express from "express"
import {
    getAllTrain,
    getTrainById,
    createTrain,
    updateTrain,
    deleteTrain,
    changePicture,

} from "../controllers/trainController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"

import multer from "multer"
import path from "path"

const app = express()

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "public/train_picture")
    },
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB limit
    }
})

// All train routes are admin-only (CRUD operations)
app.get("/", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getAllTrain)
app.get("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getTrainById)
app.post("/", authMiddleware, roleGuard('ADMIN'), upload.single("train_picture"), createTrain)

// IMPORTANT: Specific routes MUST come before generic /:id routes
// Picture upload route (must be before /:id)
app.put("/picture/:id", authMiddleware, roleGuard('ADMIN'), upload.single("train_picture"), changePicture)

app.put("/:id", authMiddleware, roleGuard('ADMIN'), upload.none(), updateTrain)
app.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteTrain)

export default app
