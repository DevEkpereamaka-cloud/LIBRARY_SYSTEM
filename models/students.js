import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exist"],
      trim: true,
      minlength: [5, "Invalid EMAIL ADDRESS"],
      lowercase: true,
    },
    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Students", studentSchema);
