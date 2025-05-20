import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { FaList, FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddNotes from "./pages/AddNotes";
import NoteListPage from "./pages/NoteListPage";
import EditNotes from "./pages/EditNotes";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "/login";
  };

  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        {token && (
          <aside className="w-1/4 bg-blue-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">📘 Menu</h2>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/add"
                className="bg-green-500 px-4 py-2 rounded-lg text-center flex items-center justify-center space-x-2"
              >
                <FaPlus />
                <span>Tambah Catatan</span>
              </Link>
              <Link
                to="/"
                className="bg-blue-500 px-4 py-2 rounded-lg text-center flex items-center justify-center space-x-2"
              >
                <FaList />
                <span>Daftar Catatan</span>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-center font-bold"
              >
                Logout
              </button>
            </nav>
          </aside>
        )}

        <main className={token ? "w-3/4 p-6" : "w-full p-6"}>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">📝 Aplikasi Catatan</h1>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <NoteListPage setNoteToEdit={setNoteToEdit} />
                </PrivateRoute>
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddNotes />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit"
              element={
                <PrivateRoute>
                  <EditNotes noteToEdit={noteToEdit} />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={token ? <Navigate to="/" /> : <Login setToken={setToken} />}
            />
            <Route
              path="/register"
              element={token ? <Navigate to="/" /> : <Register />}
            />
            <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;