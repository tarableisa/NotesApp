import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from "./auth/AuthProvider";
import AxiosInterceptor from "./api/axiosInterceptor";
import { FaList, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import AddNotes from './pages/AddNotes';
import NoteListPage from './pages/NoteListPage';
import EditNotes from './pages/EditNotes';

const App = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);

  console.log('noteToEdit:', noteToEdit); // Debugging log

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        <aside className="w-1/4 bg-blue-800 text-white p-4 min-h-screen">
          <h2 className="text-2xl font-bold mb-6 text-center">📘 Menu</h2>
          <nav className="flex flex-col space-y-4">
            <Link to="/add" className="bg-green-500 px-4 py-2 rounded-lg text-center flex items-center justify-center space-x-2">
              <FaPlus />
              <span>Tambah Catatan</span>
            </Link>
            <Link to="/" className="bg-blue-500 px-4 py-2 rounded-lg text-center flex items-center justify-center space-x-2">
              <FaList />
              <span>Daftar Catatan</span>
            </Link>
          </nav>
        </aside>

        <main className="w-3/4 p-6">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">📝 Aplikasi Catatan</h1>
          <Routes>
          <Route path="/add" element={<AddNotes />} />
            <Route path="/" element={<NoteListPage setNoteToEdit={setNoteToEdit} />} />
            <Route path="/edit" element={<EditNotes noteToEdit={noteToEdit} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
