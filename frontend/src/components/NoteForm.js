import { useState, useEffect } from "react";
import { createNote, updateNote } from "../services/api";

const NoteForm = ({ noteToEdit, fetchNotes, setNoteToEdit }) => {
  const [judul, setJudul] = useState("");
  const [isi_notes, setIsiNotes] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setJudul(noteToEdit.judul);
      setIsiNotes(noteToEdit.isi_notes);
    } else {
      setJudul("");
      setIsiNotes("");
    }
  }, [noteToEdit]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  const note = { title: judul, content: isi_notes }; 
  console.log("Note yang dikirim:", note); // Debug log

  try {
    if (noteToEdit) {
      await updateNote(noteToEdit.id, note);
      setNoteToEdit(null);
    } else {
      await createNote(note);
    }
    setJudul("");
    setIsiNotes("");
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
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        className="w-full p-3 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Isi catatan"
        value={isi_notes}
        onChange={(e) => setIsiNotes(e.target.value)}
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
