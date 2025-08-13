import cloudinary from "../config/cloudinary.js";
import logoModel from "../models/logo.model.js";
import extractPublicId from "../utils/extractPublicId.js";

export const createLogo = async (req, res) => {
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
      folder: "Logo",
    });

    const newLogo = await logoModel.create({
      image: result.secure_url,
    });

    res.status(201).json({
      success: true,
      message: "Logo image created successfully",
      data: newLogo,
    });
  } catch (error) {
    console.error(`Error creating Logo Image: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const updateLogo = async (req, res) => {
  try {
    const { id } = req.params;
    const file = req.file;

    const logoToUpdate = await logoModel.findById(id);

    if (!logoToUpdate) {
      return res.status(404).json({
        success: false,
        message: "logo not found",
      });
    }

    // handle update image if neccesary
    if (file) {
      // delete older image from cloudinary
      if (logoToUpdate.image) {
        const publicId = extractPublicId(logoToUpdate.image);
        await cloudinary.uploader.destroy(publicId);
      }

      // Upload new image
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = "data:" + file.mimetype + ";base64," + b64;
      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "Logo",
      });

      logoToUpdate.image = result.secure_url;
    }

    const updatedLogo = await logoToUpdate.save();

    res.status(200).json({
      success: true,
      message: "Logo berhasil diperbarui",
      data: updatedLogo,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllLogo = async (req, res) => {
  try {
    // Ambil satu logo terbaru (bisa juga pakai .findOne({}) jika ingin logo pertama)
    const logo = await logoModel.findOne().sort({ createdAt: -1 });

    if (!logo) {
      return res.status(404).json({
        success: false,
        message: "Logo not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Logo image retrieved successfully",
      data: logo,
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
