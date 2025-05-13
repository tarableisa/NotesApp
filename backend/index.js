import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import NotesRoute from "./routes/NotesRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Konfigurasi CORS agar mengizinkan domain frontend terdeploy
const corsOptions = {
 origin: [
    "https://notes-fe0173-dot-if-b-08.uc.r.appspot.com/",
    "http://localhost:3000", // Tambahkan localhost untuk pengembangan lokal
  ], // Ganti dengan URL frontend yang terdeploy
  credentials: true, // Memungkinkan penggunaan cookies
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions)); // Menggunakan opsi CORS

// Menambahkan penanganan preflight request (OPTIONS)
app.options("*", cors(corsOptions)); // Menanggapi preflight requests

// Middleware
app.use(cors());
app.use(express.json());
app.use(NotesRoute);

// Database Connection
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected...");
    await db.sync(); // Membuat tabel jika belum ada
  } catch (error) {
    console.error("Connection error:", error);
  }
})();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));