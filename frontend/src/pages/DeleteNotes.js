const DeleteNotes = ({ handleDelete }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Hapus Catatan</h2>
        <p>Apakah Anda yakin ingin menghapus catatan ini?</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Hapus
        </button>
      </div>
    );
  };
  
  export default DeleteNotes;