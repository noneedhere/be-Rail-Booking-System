import express from "express";
import { register, login, verifyToken } from "../controllers/authController.js";

const app = express();

/**
 * Public authentication routes
 * No authentication required
 */

// Register new user
app.post("/register", register);

// Login user
app.post("/login", login);

// Verify token (used by frontend middleware)
app.get("/verify", verifyToken);

export default app;
