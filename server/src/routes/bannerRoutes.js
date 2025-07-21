import express from "express";
import upload from "../middlewares/multer.middleware.js";
import { createBanner, deleteBanner, getAllBanner } from "../controllers/banner.controller.js";
const router = express.Router();

router.get("/get-all", getAllBanner);
router.post("/create", upload.single("image"), createBanner);
router.delete("/delete/:id", deleteBanner);

export default router;
