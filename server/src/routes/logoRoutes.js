import express from "express";
import upload from "../middlewares/multer.middleware.js";
import { createLogo, getAllLogo, updateLogo } from "../controllers/logo.controller.js";
const router = express.Router();

router.get("/get-all", getAllLogo);
router.post("/create", upload.single("image"), createLogo);
router.patch("/update/:id", upload.single("image"), updateLogo);

export default router;
