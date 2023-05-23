import mongoose from "mongoose";

const connectDB = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("MongoDB connected");
        resolve();
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        reject(error);
      });
  });
};

export default connectDB;
