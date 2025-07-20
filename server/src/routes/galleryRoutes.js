import express from "express";
import upload from "../middlewares/multer.middleware.js";
import { createGallery, deleteGallery, getAllGallery } from "../controllers/gallery.controller.js";
const router = express.Router();

router.get("/get-all", getAllGallery);
router.post("/create", upload.single("image"), createGallery);
router.delete("/delete/:id", deleteGallery);

export default router;
