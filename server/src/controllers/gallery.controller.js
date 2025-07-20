import cloudinary from "../config/cloudinary.js";
import galleryModel from "../models/gallery.model.js";
import extractPublicId from "../utils/extractPublicId.js";

export const createGallery = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
        data: null,
      });
    }

    // Mengubah buffer menjadi format yang bisa dibaca Cloudinary
    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Gallery",
    });

    const newGallery = await galleryModel.create({
      image: result.secure_url,
    });

    res.status(201).json({
      success: true,
      message: "Gallery image created successfully",
      data: newGallery,
    });
  } catch (error) {
    console.error(`Error creating Gallery Image: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getAllGallery = async (req, res) => {
  try {
    const gallery = await galleryModel.find();

    res.status(200).json({
      success: true,
      message: "Gallery image retrieved successfully",
      data: gallery,
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

export const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedGallery = await galleryModel.findByIdAndDelete(id);

    if (!deletedGallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery not found",
      });
    }

    // delete image
    if (deletedGallery.image) {
      const publicId = extractPublicId(deletedGallery.image);

      await cloudinary.uploader.destroy(publicId);
    }

    res.status(200).json({
      success: true,
      message: "Gallery image deleted successfully",
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
