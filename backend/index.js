import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import NotesRoute from "./routes/NotesRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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