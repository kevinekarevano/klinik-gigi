import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const bannerModel = mongoose.model("Banner", bannerSchema);

export default bannerModel;
