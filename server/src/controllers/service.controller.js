import cloudinary from "../config/cloudinary.js";
import serviceModel from "../models/service.model.js";
import extractPublicId from "../utils/extractPublicId.js";

export const createService = async (req, res) => {
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
      folder: "Service",
    });

    const newService = await serviceModel.create({
      image: result.secure_url,
      title,
      content,
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: newService,
    });
  } catch (error) {
    console.error(`Error creating service: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getAllService = async (req, res) => {
  try {
    const services = await serviceModel.find();

    res.status(200).json({
      success: true,
      message: "Services retrieved successfully",
      data: services,
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

export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await serviceModel.findById(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service retireved successfully",
      data: service,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const file = req.file;

    const serviceToUpdate = await serviceModel.findById(id);

    if (!serviceModel) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // handle update image if neccesary
    if (file) {
      // delete older image from cloudinary
      if (serviceToUpdate.image) {
        const publicId = extractPublicId(serviceToUpdate.image);
        await cloudinary.uploader.destroy(publicId);
      }

      // Upload new image
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = "data:" + file.mimetype + ";base64," + b64;
      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "Service",
      });

      serviceToUpdate.image = result.secure_url;
    }

    serviceToUpdate.title = title || serviceToUpdate.title;
    serviceToUpdate.content = content || serviceToUpdate.content;

    const updatedService = await serviceToUpdate.save();

    res.status(200).json({
      success: true,
      message: "Service berhasil diperbarui",
      data: updatedService,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedService = await serviceModel.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // delete image
    if (deletedService.image) {
      const publicId = extractPublicId(deletedService.image);

      await cloudinary.uploader.destroy(publicId);
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
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
