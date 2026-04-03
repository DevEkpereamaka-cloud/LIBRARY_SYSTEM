import mongoose from "mongoose";
const authorsSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Invalid Name"],
    },
    bio: {
      type: String,
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Authors", authorsSchema);
