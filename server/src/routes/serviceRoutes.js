import express from "express";
import { createService, deleteService, getAllService, getServiceById } from "../controllers/service.controller.js";
import upload from "../middlewares/multer.middleware.js";
const router = express.Router();

router.get("/get-all", getAllService);
router.get("/:id", getServiceById);
router.post("/create", upload.single("image"), createService);
router.delete("/delete/:id", deleteService);

export default router;
