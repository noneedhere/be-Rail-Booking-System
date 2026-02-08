import express from "express"
import {
    getAllCarriage,
    getCarriageById,
    createCarriage,
    updateCarriage,
    deleteCarriage,
} from "../controllers/carriageController.js"

const app = express()

app.get("/", getAllCarriage)
app.get("/:id", getCarriageById)
app.post("/", createCarriage)
app.put("/:id", updateCarriage)
app.delete("/:id", deleteCarriage)
export default app
