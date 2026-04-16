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

const upload = multer({
    storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB limit
    },
    fileFilter: (_req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
})

// Admin only routes
app.get("/", authMiddleware, roleGuard('ADMIN'), getAllUsers)
app.post("/", authMiddleware, roleGuard('ADMIN'), upload.single("profile_picture"), createUser)
app.delete("/:id", authMiddleware, roleGuard('ADMIN'), deleteUser)

// IMPORTANT: Specific routes MUST come before generic /:id routes
// Picture upload route (must be before /:id)
app.put("/picture/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), upload.single("profile_picture"), changePicture)

// Admin or owner routes (users can view/update their own profile)
app.get("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), getUserById)
app.put("/:id", authMiddleware, roleGuard('ADMIN', 'CUSTOMER'), upload.none(), updateUser)

export default app
