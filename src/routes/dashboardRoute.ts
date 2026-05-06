import express from "express"
import { getDashboardSummary } from "../controllers/dashboardController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"

const router = express.Router()

// Admin only — aggregated dashboard statistics
router.get("/summary", authMiddleware, roleGuard('ADMIN'), getDashboardSummary)

export default router
