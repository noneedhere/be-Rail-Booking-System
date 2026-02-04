import express from "express"
import {
    getAllTrain,
    getTrainById,
    createTrain,
    updateTrain,
    deleteTrain,
    changePicture,

} from "../controllers/trainController.js"

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

const upload = multer({ storage })

app.get("/", getAllTrain)
app.get("/:id", getTrainById)
app.post("/", upload.none(), createTrain)
app.put("/:id", upload.none(), updateTrain)
app.put("/picture/:id", upload.single("train_picture"), changePicture)
app.delete("/:id", deleteTrain)

export default app
