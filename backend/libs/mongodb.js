import mongoose from "mongoose";
require('colors')
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.".cyan.bold);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
