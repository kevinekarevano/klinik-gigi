import express from "express";
import upload from "../middlewares/multer.middleware.js";
import { createGallery, deleteGallery, getAllGallery } from "../controllers/gallery.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/get-all", getAllGallery);
router.post("/create", authMiddleware, upload.single("image"), createGallery);
router.delete("/delete/:id", authMiddleware, deleteGallery);

export default router;
