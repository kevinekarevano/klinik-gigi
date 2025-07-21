import cloudinary from "../config/cloudinary.js";
import bannerModel from "../models/banner.model.js";
import extractPublicId from "../utils/extractPublicId.js";

export const createBanner = async (req, res) => {
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
      folder: "Banner",
    });

    const newBanner = await bannerModel.create({
      image: result.secure_url,
    });

    res.status(201).json({
      success: true,
      message: "Banner image created successfully",
      data: newBanner,
    });
  } catch (error) {
    console.error(`Error creating Banner Image: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getAllBanner = async (req, res) => {
  try {
    const banner = await bannerModel.find();

    res.status(200).json({
      success: true,
      message: "Banner image retrieved successfully",
      data: banner,
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

export const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBanner = await bannerModel.findByIdAndDelete(id);

    if (!deletedBanner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    // delete image
    if (deletedBanner.image) {
      const publicId = extractPublicId(deletedBanner.image);

      await cloudinary.uploader.destroy(publicId);
    }

    res.status(200).json({
      success: true,
      message: "Banner image deleted successfully",
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
