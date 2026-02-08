import express from "express"
import cors from "cors"
import path from "path"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import { fileURLToPath } from "url"
import trainRoute from "./routes/trainRoute.js"
import carriageRoute from "./routes/carriageRoute.js"
import seatRoute from "./routes/seatRoute.js"
import scheduleRoute from "./routes/scheduleRoute.js"
import purchaseRoute from "./routes/purchaseRoute.js"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files for profile pictures
app.use(
    "/profilePicture",
    express.static(path.join(__dirname, "../public/profilePicture"))
)

// Public routes (no authentication required)
app.use("/auth", authRoute)

// Protected routes (authentication required, role-based access)
app.use("/user", userRoute)
app.use("/train", trainRoute)
app.use("/carriage", carriageRoute)
app.use("/seat", seatRoute)
app.use("/schedule", scheduleRoute)
app.use("/purchase", purchaseRoute)

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
