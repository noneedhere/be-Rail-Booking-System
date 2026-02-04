import express from "express"
import {
    getAllSeat,
    getSeatById,
    createSeat,
    updateSeat,
    deleteSeat,
} from "../controllers/seatController.js"

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

app.get("/", getAllSeat)
app.get("/:id", getSeatById)
app.post("/", upload.none(), createSeat)
app.put("/:id", upload.none(), updateSeat)
app.delete("/:id", deleteSeat)
export default app
