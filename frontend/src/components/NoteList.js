import { useNavigate } from "react-router-dom";


const NoteList = ({ notes, setNoteToEdit, handleDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (note) => {
    console.log("Edit button clicked", note); // Debugging log
    setNoteToEdit(note); // Pastikan fungsi ini ter-define
    navigate('/edit'); // Navigasi ke halaman edit
  };

  return (
    <div className="container mx-auto p-4">
      <ul>
        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={note.id} className="bg-white border p-4 mb-4 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{note.judul}</h2>
              <p className="text-gray-600">{note.isi_notes}</p>
              <p className="text-sm text-gray-500 mt-2">📅 Dibuat: {note.created_at}</p>
              <div className="flex mt-4">
                <button
                  onClick={() => handleEdit(note)} // Cek ini
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2 font-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">Tidak ada catatan.</p>
        )}
      </ul>
    </div>
  );
};

export default NoteList;
