import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://notes-be0173-589948883802.us-central1.run.app/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.accessToken);
      setToken(response.data.accessToken); // update token di App.js
      navigate("/"); // langsung pindah ke Home
    } catch (err) {
      const msg = err.response?.data?.message || "Login gagal, cek username & password";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl mb-6 font-bold text-center">Login</h2>
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
          className="w-full mb-6 p-3 border rounded"
          autoComplete="current-password"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded font-bold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Memproses..." : "Login"}
        </button>
        <p className="mt-4 text-center text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
