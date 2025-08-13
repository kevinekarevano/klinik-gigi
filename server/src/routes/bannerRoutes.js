import express from "express";
import upload from "../middlewares/multer.middleware.js";
import { createBanner, deleteBanner, getAllBanner } from "../controllers/banner.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/get-all", getAllBanner);
router.post("/create", authMiddleware, upload.single("image"), createBanner);
router.delete("/delete/:id", authMiddleware, deleteBanner);

export default router;
