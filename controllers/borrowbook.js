import Books from "../models/books.js";
import Librarian from "../models/librarian.js";
import Students from "../models/students.js";
export const borrowBook = async (req, res) => {
  try {
    const { librarianId, studentId, returnDate } = req.body;
    const book = await Books.findById(req.params.id);
    const library = await Librarian.findById(librarianId);
    const student = await Students.findById(studentId);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "student not found" });
    }
    if (!library) {
      return res
        .status(404)
        .json({ success: false, message: "librarian not found" });
    }
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    if (book.status === "OUT") {
      return res
        .status(400)
        .json({ success: false, message: "book is already out" });
    }
    book.status = "OUT";
    book.borrowedBy = studentId;
    book.issuedBy = librarianId;
    book.returnDate = returnDate;
    await book.save();
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).send("minor sever issue");
    console.log(error.message);
  }
};
