import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
dotenv.config();
const app = express();
const PORT = 3000;

// Db Connection
connectDb();

// Middleware
app.use(express.json());

//  Routes
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
  })
);
app.use("/api/service", serviceRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/gallery", galleryRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Ahli Gigi Bintaro API",
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
