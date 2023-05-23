import connectDB from "@/utils/db";
import Sliders from "@/models/sliderModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getSliders(req, res);
      break;
  }
};

const getSliders = async (req, res) => {
  try {
    const sliders = await Sliders.find();

    res.json({
      status: "success",
      result: sliders.length,
      sliders,
    });
  } catch (err) {
    return console.log(err.message);
  }
};
