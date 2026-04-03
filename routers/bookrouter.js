import {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/bookcontroller.js";
import { borrowBook } from "../controllers/borrowbook.js";
import { returnBook } from "../controllers/returnbook.js";
import express from "express";
const router = express.Router();
router.post("/librarysystem/books", createBook);
router.post("/librarysystem/books/:id/borrow", borrowBook);
router.post("/librarysystem/books/:id/return", returnBook);
router.get("/librarysystem/books", getAllBooks);
router.get("/librarysystem/books/:id", getBook);
router.patch("/librarysystem/books/:id", updateBook);
router.delete("librarysystem/book/:id", deleteBook);
export default router;
