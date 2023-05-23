import connectDB from "@/utils/db";
import Products from "@/models/productModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    res.json({
      status: "success",
      result: products.length,
      products,
    });
  } catch (err) {
    return console.log(err.message);
  }
};
