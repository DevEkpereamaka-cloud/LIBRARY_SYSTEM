"use strict";
import mongoose from "mongoose";
const librarianSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    staffId: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Librarian", librarianSchema);
