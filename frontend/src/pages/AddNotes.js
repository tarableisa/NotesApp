import React, { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";

const AddNotes = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);

  const dummyFetchNotes = () => {
    console.log("fetchNotes dijalankan (dummy)");
  };

  useEffect(() => {
    console.log("✅ AddNotes.js dimounting");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Tambah Catatan Baru</h2>
      <NoteForm
        noteToEdit={noteToEdit}
        fetchNotes={dummyFetchNotes}
        setNoteToEdit={setNoteToEdit}
      />
    </div>
  );
};

export default AddNotes;
