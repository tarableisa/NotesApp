import { useState, useEffect } from "react";
import { createNote, updateNote } from "../services/api";

const NoteForm = ({ noteToEdit, fetchNotes, setNoteToEdit }) => {
 const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title || "");
      setContent(noteToEdit.content || "");
    } else {
      setTitle("");
      setContent("");
    }
  }, [noteToEdit]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  const note = { title, content}; 
  console.log("Note yang dikirim:", note); // Debug log
await createNote(note);
// GANTI INI

  try {
    if (noteToEdit) {
      await updateNote(noteToEdit.id, note);
      setNoteToEdit(null);
    } else {
      await createNote(note);
    }
    setTitle("");
    setContent("");
    fetchNotes?.();
  } catch (error) {
    console.error("Gagal menyimpan catatan", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      alert("Error backend: " + JSON.stringify(error.response.data));
    }
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-xl shadow-lg max-w-md w-full"
    >
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Isi catatan"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold"
      >
        {noteToEdit ? "Update" : "Tambah"}
      </button>
    </form>
  );
};

export default NoteForm;