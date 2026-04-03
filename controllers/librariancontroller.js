import Librarian from "../models/librarian.js";
export const createLibarian = async (req, res) => {
  try {
    const newLibrarian = await Librarian.create(req.body);
    res.status(201).json({
      success: true,
      message: `${newLibrarian.firstName} has been added to the database`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const getAllLibrarian = async (req, res) => {
  try {
    const all = await Librarian.find().populate("firstName", "lastName");
    res.status(200).json({ success: true, count: all.length, message: all });
  } catch (error) {
    res.status(500).send("Dey with me :)");
    console.log(error.message);
  }
};
export const getLibrarian = async (req, res) => {
  try {
    const librarian = await Librarian.findById(req.params.id);
    if (!librarian) {
      return res
        .status(404)
        .json({ success: false, message: "Librarian not found" });
    }
    res.status(200).json({ success: true, data: libarian });
  } catch (error) {
    res.status(500).send("Dey with me");
    console.log(error.message);
  }
};
export const updateLibrarian = async (req, res) => {
  try {
    const updated = await Librarian.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Librarian not found" });
    }
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const deleteLibrarian = async (req, res) => {
  try {
    const deleted = await Librarian.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "librarian not found" });
    }
    res.status(200).json({
      success: true,
      message: `${deleted.firstName} has been removed from the database"`,
    });
  } catch (error) {
    res.status(500).send("Dey with me");
    console.log(error.message);
  }
};
