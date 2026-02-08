import express from "express"
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    changePicture
} from "../controllers/userController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleGuard } from "../middleware/roleGuard.js"

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

// Admin only routes
app.get("/", getAllUsers)
app.post("/", upload.single("profile_picture"), createUser)
// app.get("/", authMiddleware, roleGuard('ADMIN'), getAllUsers)
// app.post("/", authMiddleware, roleGuard('ADMIN'), upload.single("profile_picture"), createUser)
app.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteUser)

// Admin or owner routes (users can view/update their own profile)
app.get("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getUserById)
app.put("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), upload.none(), updateUser)
app.put("/picture/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), upload.single("profile_picture"), changePicture)

export default app
