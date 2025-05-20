import React from "react";
import NoteForm from "../components/NoteForm";

const AddNotes = () => {
  console.log("AddNotes dirender");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tambah Catatan Baru</h2>
      <NoteForm />
    </div>
  );
};

export default AddNotes;