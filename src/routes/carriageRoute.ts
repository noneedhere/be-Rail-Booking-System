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

const app = express()

// All carriage routes are admin-only (CRUD operations)
app.get("/", authMiddleware, roleGuard('ADMIN'), getAllCarriage)
app.get("/:id", authMiddleware, roleGuard('ADMIN'), getCarriageById)
app.post("/", authMiddleware, roleGuard('ADMIN'), createCarriage)
app.put("/:id", authMiddleware, roleGuard('ADMIN'), updateCarriage)
app.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteCarriage)
export default app
