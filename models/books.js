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
        ref: "Authors",
        required: true,
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
      required: true,
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Libarian",
      required: true,
    },
    returnDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);
export default Books = mongoose.model("Books", booksSchema);
