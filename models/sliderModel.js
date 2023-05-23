import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

let Dataset = mongoose.models.slider || mongoose.model("slider", sliderSchema);
export default Dataset;
