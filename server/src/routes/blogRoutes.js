import express from "express";
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/get-all", getAllBlog);
router.get("/:id", getBlogById);
router.post("/create", authMiddleware, upload.single("image"), createBlog);
router.delete("/delete/:id", authMiddleware, deleteBlog);
router.patch("/update/:id", authMiddleware, upload.single("image"), updateBlog);

export default router;
