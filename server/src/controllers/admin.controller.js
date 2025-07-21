import adminModel from "../models/admin.model.js";
import bcrypt from "bcryptjs";

export const createAdmin = async (req, res) => {
  try {
    const { username, password, avatar } = req.body;

    if (!username || !password || !avatar) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const existingAdmin = await adminModel.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await adminModel.create({
      username,
      password: hashedPassword,
      avatar,
    });

    res.status(201).json({ success: true, message: "Admin created successfully", data: newAdmin });
  } catch (error) {
    console.error(`Error creating Banner Image: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};
