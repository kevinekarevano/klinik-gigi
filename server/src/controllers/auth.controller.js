import bcrypt from "bcryptjs";
import adminModel from "../models/admin.model.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const findAdmin = await adminModel.findOne({ username: { $regex: `^${username}$`, $options: "i" } });
    if (!findAdmin) {
      return res.status(404).json({ success: false, message: "Invalid credentials" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, findAdmin.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // create jwt token
    const token = jwt.sign(
      {
        id: findAdmin._id,
        role: findAdmin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true, // only accessible by the web server
      secure: process.env.NODE_ENV === "production", // set to true if using https
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // set to 'none' for cross-site cookies in production
      maxAge: 24 * 60 * 60 * 1000, // 1 d
    });

    return res.status(200).json({ success: true, message: `Welcome ${findAdmin.username}!` });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true, // only accessible by the web server
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // set to 'none' for cross-site cookies in production
    });
    return res.status(200).json({ success: true, message: "Logout successfully" });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const me = async (req, res) => {
  try {
    const id = req.user.id;

    const admin = await adminModel.findById(id).select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Admin data retrieved successfully",
      data: admin,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};
