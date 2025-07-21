import express from "express";
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.middleware.js";
const router = express.Router();

router.get("/get-all", getAllBlog);
router.get("/:id", getBlogById);
router.post("/create", upload.single("image"), createBlog);
router.delete("/delete/:id", deleteBlog);
router.patch("/update/:id", upload.single("image"), updateBlog);

export default router;
