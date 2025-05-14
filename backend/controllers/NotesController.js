import Note from "../models/NotesModel.js";

// Get All Notes
export const getNotes = async (req, res) => {
  try {
    const note = await Note.findAll();
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Note by ID
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Note
export const createNote = async (req, res) => {
  try {
    const userId = req.user.id; // pastikan verifyToken sudah dipasang
    await Note.create({ ...req.body, userId });
    res.json({ message: "Note Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Note
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    await note.update(req.body);
    res.json({ message: "Note Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    await note.destroy();
    res.json({ message: "Note Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
