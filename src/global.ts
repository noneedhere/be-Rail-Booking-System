import path from "path";
import dotenv from "dotenv";

dotenv.config();

/** Gunakan import.meta.dirname untuk ESM */
export const BASE_URL = path.join(import.meta.dirname, "../");
export const PORT = process.env.PORT;
export const SECRET = process.env.SECRET;