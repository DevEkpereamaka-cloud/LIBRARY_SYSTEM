import mongoose from "mongoose";
const booksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Authors",
      },
    ],
    status: {
      type: String,
      enum: ["IN", "OUT"],
      default: "IN",
    },
    borrowedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
      default: null,
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Libarian",
      default: null,
    },
    returnDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Books", booksSchema);
