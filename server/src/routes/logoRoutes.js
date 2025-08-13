import express from "express";
import upload from "../middlewares/multer.middleware.js";
import { createLogo, getAllLogo, updateLogo } from "../controllers/logo.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/get-all", getAllLogo);
router.post("/create", authMiddleware, upload.single("image"), createLogo);
router.patch("/update/:id", authMiddleware, upload.single("image"), updateLogo);

export default router;
