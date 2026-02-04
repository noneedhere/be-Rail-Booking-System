import express from "express"
import {
    getAllCarriage,
    getCarriageById,
    createCarriage,
    updateCarriage,
    deleteCarriage,
} from "../controllers/carriageController.js"

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

app.get("/", getAllCarriage)
app.get("/:id", getCarriageById)
app.post("/", upload.none(), createCarriage)
app.put("/:id", upload.none(), updateCarriage)
app.delete("/:id", deleteCarriage)
export default app
