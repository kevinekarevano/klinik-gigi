import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import serviceRoutes from "./routes/serviceRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import logoRoutes from "./routes/logoRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();
const PORT = 3000;

// Db Connection
connectDb();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//  Routes
app.use("/api/service", serviceRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/logo", logoRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Ahli Gigi Bintaro API",
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
