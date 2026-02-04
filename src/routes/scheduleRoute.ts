import express from "express"
import {
    getAllSchedule,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule,
} from "../controllers/scheduleController.js"

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

app.get("/", getAllSchedule)
app.get("/:id", getScheduleById)
app.post("/", upload.none(), createSchedule)
app.put("/:id", upload.none(), updateSchedule)
app.delete("/:id", deleteSchedule)
export default app
