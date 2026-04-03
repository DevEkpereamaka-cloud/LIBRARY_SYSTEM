import Books from "../models/books.js";
export const createBook = async (req, res) => {
  try {
    const book = await Books.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Books.find().populate("authors", "fullName bio");
    res
      .status(200)
      .send({ success: true, count: allBooks.length, data: allBooks });
  } catch (error) {
    res.status(500).send("Dey with me :)");
    console.log(error.message);
  }
};
export const getBook = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id).populate(
      "authors",
      "fullName bio",
    );
    if (!book) {
      return res.status(404).json({ message: "Book Not Found" });
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send("Dey with me :) ");
    console.log(error.message);
  }
};
export const updateBook = async (req, res) => {
  try {
    const update = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!update) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res.status(200).send({ success: true, data: update });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const deleteBook = async (req, res) => {
  try {
    const deleted = await Books.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Book Not Found" });
    }
    res.status(200).json({
      success: true,
      message: `${deleted.firstName} with id ${deleted.id} has been removed from the database`,
    });
  } catch (error) {
    res.status(500).send("Dey with me");
    console.log(error.message);
  }
};
