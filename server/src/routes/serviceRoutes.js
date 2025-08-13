import express from "express";
import { createService, deleteService, getAllService, getServiceById, updateService } from "../controllers/service.controller.js";
import upload from "../middlewares/multer.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/get-all", getAllService);
router.get("/:id", getServiceById);
router.post("/create", authMiddleware, upload.single("image"), createService);
router.patch("/update/:id", authMiddleware, upload.single("image"), updateService);
router.delete("/delete/:id", authMiddleware, deleteService);

export default router;
