import Authors from "../models/authors.js";
export const createAuthor = async (req, res) => {
  try {
    const Author = Authors.create(req.body);
    res.status(201).json({ success: true, data: Author });
  } catch (error) {
    res.status(400).json({ success: false, message: error.mesaage });
  }
};
export const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Authors.find();
    res
      .status(200)
      .json({ success: true, count: allAuthors.length, data: allAuthors });
  } catch (error) {
    res.status(500).send("Dey with me i will be back :)");
    console.log(error.message);
  }
};
export const getAuthor = async (req, res) => {
  try {
    const author = await Authors.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author Not Found" });
    }
    res.status(200).json({ sucees: true, data: author });
  } catch (error) {}
};
export const updateAuthor = async (req, res) => {
  try {
    const author = await Authors.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!author) {
      return res
        .status(404)
        .json({ success: false, message: "Author Not Found" });
    }
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};
export const deleteAuthor = async (req, res) => {
  try {
    const author = await Authors.findByIdAndDelete(req.params.id);
    if (!author) {
      return res
        .status(404)
        .json({ success: false, message: "Author Not Found" });
    }
    res.status(200).json({
      message: ` ${author.name} with id ${author.id} has been removed from the database`,
    });
  } catch (error) {
    res.status(500).send("Dey with me :)");
    console.log(error.message);
  }
};
