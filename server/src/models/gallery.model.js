import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const galleryModel = mongoose.model("Gallery", gallerySchema);

export default galleryModel;
