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
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);
[span_3](start_span);
export default Librarian = mongoose.model("Librarian", librarianSchema);
