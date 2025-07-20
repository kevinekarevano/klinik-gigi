import cloudinary from "../config/cloudinary.js";
import blogModel from "../models/blog.model.js";
import extractPublicId from "../utils/extractPublicId.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const file = req.file;

    if (!file || !title || !content) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        data: null,
      });
    }

    // Mengubah buffer menjadi format yang bisa dibaca Cloudinary
    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Blog",
    });

    const newBlog = await blogModel.create({
      image: result.secure_url,
      title,
      content,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    console.error(`Error creating blog: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await blogModel.find();

    res.status(200).json({
      success: true,
      message: "Blogs retrieved successfully",
      data: blogs,
    });
  } catch (error) {
    console.error(`Error : ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const file = req.file;

    const blogToUpdate = await blogModel.findById(id);

    if (!blogToUpdate) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // handle update image if neccesary
    if (file) {
      // delete older image from cloudinary
      if (blogToUpdate.image) {
        const publicId = extractPublicId(blogToUpdate.image);
        await cloudinary.uploader.destroy(publicId);
      }

      // Upload new image
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = "data:" + file.mimetype + ";base64," + b64;
      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "Blog",
      });

      blogToUpdate.image = result.secure_url;
    }

    blogToUpdate.title = title || blogToUpdate.title;
    blogToUpdate.content = content || blogToUpdate.content;

    const updatedBlog = await blogToUpdate.save();

    res.status(200).json({
      success: true,
      message: "Blog berhasil diperbarui",
      data: updatedBlog,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await blogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // delete image
    if (deletedBlog.image) {
      const publicId = extractPublicId(deletedBlog.image);

      await cloudinary.uploader.destroy(publicId);
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error(`Error : ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};
