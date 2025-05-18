import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState(""); // aku ganti email ke username sesuai permintaan awal
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validasi sederhana username (boleh tambah sesuai kebutuhan)
  const isValidUsername = (name) => {
    return name.trim().length >= 3;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValidUsername(username)) {
      setError("Username minimal 3 karakter");
      return;
    }

    if (password !== confirm_password) {
      setError("Password dan konfirmasi password harus sama");
      return;
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://notes-be0173-589948883802.us-central1.run.app/register", {
        username, // kirim username sesuai permintaan
        password,
        confirm_password
      });
      setLoading(false);
      navigate("/login");
    } catch (err) {
      setLoading(false);
      // Cek jika backend kirim pesan error di response.data.message
      const msg = err.response?.data?.message || "Registrasi gagal, coba lagi";
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl mb-6 font-bold text-center">Register</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full mb-4 p-3 border rounded"
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 p-3 border rounded"
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={confirm_password}
          onChange={(e) => setConfirm_password(e.target.value)}
          required
          className="w-full mb-6 p-3 border rounded"
          autoComplete="new-password"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded font-bold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          {loading ? "Memproses..." : "Register"}
        </button>
        <p className="mt-4 text-center text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-purple-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
