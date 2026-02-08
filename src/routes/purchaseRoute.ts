import express from "express"
import {
    getAllPurchase,
    getPurchaseById,
    createTicketPurchase,
    getMyTicketPurchases,
} from "../controllers/purchaseController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"

import multer from "multer"
import path from "path"

const app = express()
const upload = multer()

// Admin only - view all purchases
app.get("/", authMiddleware, roleGuard('ADMIN'), getAllPurchase)

// Authenticated users - view own purchases
app.get("/my", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getMyTicketPurchases)

// Authenticated users - view specific purchase (with ownership check in controller)
app.get("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getPurchaseById)

// Authenticated users - create purchase
app.post("/", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), upload.none(), createTicketPurchase)

export default app
