import { useState, useEffect } from "react";
import { getNotes, deleteNote } from "../services/api";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";



const Home = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error("Gagal menghapus catatan:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8">Aplikasi Catatan</h1>
      <NoteForm fetchNotes={fetchNotes} noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
      <NoteList notes={notes} setNoteToEdit={setNoteToEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
