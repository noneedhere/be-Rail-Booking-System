import express from "express"
import {
    getAllPurchase,
    getPurchaseById,
    createTicketPurchase,
    getMyTicketPurchases,
    deletePurchase,
} from "../controllers/purchaseController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"

import multer from "multer"

const router = express.Router()
const upload = multer()

// Authenticated users - view own purchases
router.get("/my", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getMyTicketPurchases)

// Admin only - view all purchases
router.get("/", authMiddleware, roleGuard('ADMIN'), getAllPurchase)

// Authenticated users - view specific purchase (with ownership check in controller)
router.get("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getPurchaseById)

// Authenticated users - create purchase
router.post("/", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), upload.none(), createTicketPurchase)

// Admin only - delete purchase
router.delete("/:id", authMiddleware, roleGuard('ADMIN'), deletePurchase)

export default router
