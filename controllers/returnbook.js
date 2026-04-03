import Books from "../models/books.js";
import Librarian from "../models/librarian.js";
export const returnBook = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    if (book.status === "IN") {
      return res
        .status(400)
        .json({ success: false, message: "Book is already in " });
    }
    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = null;
    await book.save();
    res.status(200).json({
      success: true,
      message: "book returned successfuly",
      data: book,
    });
  } catch (error) {
    res.status(500).send("Dey with me everything is under control");
    console.log(error);
  }
};
