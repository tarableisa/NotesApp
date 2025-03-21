import NoteForm from "../components/NoteForm";

const EditNotes = ({ noteToEdit }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">✏️ Edit Catatan</h2>
      <NoteForm noteToEdit={noteToEdit} />
    </div>
  );
};

export default EditNotes;
