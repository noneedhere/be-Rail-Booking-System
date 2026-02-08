import express from "express";
import { register, login } from "../controllers/authController.js";

const app = express();

/**
 * Public authentication routes
 * No authentication required
 */

// Register new user
app.post("/register", register);

// Login user
app.post("/login", login);

export default app;
