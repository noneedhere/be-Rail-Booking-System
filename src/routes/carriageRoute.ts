import express from "express"
import {
    getAllCarriage,
    getCarriageById,
    createCarriage,
    updateCarriage,
    deleteCarriage,
} from "../controllers/carriageController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"
import multer from "multer"

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

// All carriage routes are admin-only (CRUD operations)
app.get("/", authMiddleware, roleGuard('ADMIN'), getAllCarriage)
app.get("/:id", authMiddleware, roleGuard('ADMIN'), getCarriageById)
app.post("/", authMiddleware, roleGuard('ADMIN'), upload.none(), createCarriage)
app.put("/:id", authMiddleware, roleGuard('ADMIN'), upload.none(), updateCarriage)
app.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteCarriage)
export default app
