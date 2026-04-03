import {
  createAuthor,
  getAllAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorcontroller.js";
import express from "express";
const router = express.Router();
router.post("/librarysystem/authors", createAuthor);
router.get("/librarysystem/authors", getAllAuthors);
router.get("/librarysystem/authors/:id", getAuthor);
router.patch("/librarysystem/authors/:id", updateAuthor);
router.delete("/librarysystem/authors/:id", deleteAuthor);
export default router;
