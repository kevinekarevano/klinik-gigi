import express from "express";
import { login, logout, me } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/me", authMiddleware, me);
router.post("/login", login);
router.post("/logout",authMiddleware, logout);

export default router;
