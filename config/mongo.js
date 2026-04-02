import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.database);
    console.log({ Message: "Connection to database established" });
  } catch (error) {
    console.log({ Message: error.message });
  }
};
