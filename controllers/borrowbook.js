import Books from "../models/books.js";
export const borrowBook = async (req, res) => {
  try {
    const { librarianId, studentId, returnDate } = req.body;
    const book = await Books.findById(req.params.id);
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
    if (error.value) {
      return res
        .status(400)
        .send(`${error.value} is not recorded in our database`);
    }
    res.status(400).send({
      message: `invalid id`,
    });
    console.log(error.message);
  }
};
