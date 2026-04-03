import {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentscontroller.js";
import express from "express";
const router = express.Router();
router.post("/librarysystem/students", createStudent);
router.get("/librarysystem/students", getAllStudents);
router.get("/librarysystem/students/:id", getStudent);
router.patch("/librarysystem/students/:id", updateStudent);
router.delete("/librarysystem/students/:id", deleteStudent);
export default router;
