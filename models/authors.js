import mongoose from "mongoose";
const authorsSchema = new mongoose.Schema(
  {
    name: {
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
[span_3](start_span);
export default mongoose.model("Authors", authorsSchema);
