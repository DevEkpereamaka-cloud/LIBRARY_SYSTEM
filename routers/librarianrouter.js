import {
  createLibarian,
  getAllLibrarian,
  getLibrarian,
  updateLibrarian,
  deleteLibrarian,
} from "../controllers/librariancontroller.js";
import express from "express";
const router = express.Router();
router.post("/librarysystem/librarian", createLibarian);
router.get("/librarysystem/librarian", getAllLibrarian);
router.get("/librarysystem/librarian/:id", getLibrarian);
router.patch("/librarysystem/librarian/:id", updateLibrarian);
router.delete("/librarysystem/librarian/:id", deleteLibrarian);
export default router;
