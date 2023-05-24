import connectDB from "@/utils/db";
import Products from "@/models/productModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res);
      break;
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const product = await Products.findById(id);

    res.json({ product });
    if (!product)
      return res.status(400).json({ err: "This product does not exist." });
  } catch (err) {
    return console.log(err.message);
  }
};
