import { useState, useEffect } from "react";
import { getNotes, deleteNote } from "../services/api";
import NoteList from "../components/NoteList";
import axios from '../api/axiosInstance';
import useAuth from "../auth/useAuth";


const NoteListPage = ({ setNoteToEdit }) => {
  const [notes, setNotes] = useState([]);

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <NoteList notes={notes} fetchNotes={fetchNotes} handleDelete={handleDelete} setNoteToEdit={setNoteToEdit} />
    </div>
  );
};

export default NoteListPage;
