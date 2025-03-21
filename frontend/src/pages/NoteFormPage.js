import NoteForm from "../components/NoteForm";

const NoteFormPage = ({ fetchNotes, noteToEdit, setNoteToEdit }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">
        {noteToEdit ? "Edit Catatan" : "Tambah Catatan Baru"}
      </h1>
      <NoteForm
        fetchNotes={fetchNotes}
        noteToEdit={noteToEdit}
        setNoteToEdit={setNoteToEdit}
      />
    </div>
  );
};

export default NoteFormPage;
