import { useState, useEffect } from "react";
import { createNote, updateNote } from "../services/api";



const NoteForm = ({ noteToEdit }) => {
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
    const note = { judul, isi_notes };

    try {
      if (noteToEdit) {
        await updateNote(noteToEdit.id, note);
      } else {
        await createNote(note);
      }
      setJudul("");
      setIsiNotes("");
    } catch (error) {
      console.error("Gagal menyimpan catatan", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-xl shadow-lg">
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
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold">
        {noteToEdit ? "Update" : "Tambah"}
      </button>
    </form>
  );
};

export default NoteForm;
