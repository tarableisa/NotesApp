import NoteForm from "../components/NoteForm";

const AddNotes = ({ fetchNotes }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tambah Catatan Baru</h2>
      <NoteForm fetchNotes={fetchNotes} />
    </div>
  );
};

export default AddNotes;