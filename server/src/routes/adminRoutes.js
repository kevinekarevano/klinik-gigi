import express from "express";
import { createAdmin } from "../controllers/admin.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/create", authMiddleware, createAdmin);

export default router;
