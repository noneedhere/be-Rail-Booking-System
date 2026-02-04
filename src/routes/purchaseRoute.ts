import express from "express"
import {
    getAllPurchase,
    getPurchaseById,
    createTicketPurchase,
    getMyTicketPurchases,
} from "../controllers/purchaseController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

import multer from "multer"
import path from "path"

const app = express()
const upload = multer()

app.get("/", getAllPurchase)
app.get("/my", authMiddleware, getMyTicketPurchases)
app.get("/:id", authMiddleware, getPurchaseById)
app.post("/", authMiddleware, upload.none(), createTicketPurchase)

// app.get("/", getAllPurchase)
// app.get("/my", getMyTicketPurchases)
// app.get("/:id", getPurchaseById)
// app.post("/", upload.none(), createTicketPurchase)

export default app
