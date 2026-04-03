import Students from "../models/students.js";
export const createStudent = async (req, res) => {
  try {
    const newStudent = await Students.create(req.body);
    res.status(201).json({ success: true, data: newStudent });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
export const getAllStudents = async (req, res) => {
  try {
    const all = await Students.find();
    res.status(200).json({ success: true, count: all.length, data: all });
  } catch (error) {
    res.status(500).send("Dey wii meee");
    console.error(error.message);
  }
};
export const getStudent = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) {
      return res
        .status(404)
        .json({ succes: false, message: "Student not found " });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(500).send("deyy wii me");
    console.error(error.message);
  }
};
export const updateStudent = async (req, res) => {
  try {
    const updated = await Students.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const deleteStudent = async (req, res) => {
  try {
    const deleted = await Students.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }
    res.status(200).json({
      success: true,
      message: `${deleted.firstName} has been removed from the database`,
    });
  } catch (error) {
    res.status(500).send("Dey with me");
    console.error(error.message);
  }
};
