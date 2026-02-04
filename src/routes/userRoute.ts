import express from "express"
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    changePicture,
    authentication
} from "../controllers/userController.js"

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

app.get("/", getAllUsers)
app.get("/:id", getUserById)
app.post("/", upload.none(), createUser)
app.put("/:id", upload.none(), updateUser)
app.put("/picture/:id", upload.single("profilePicture"), changePicture)
app.delete("/:id", deleteUser)

app.post("/login", authentication)

export default app
