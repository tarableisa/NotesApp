import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Inisialisasi Sequelize dengan .trim() untuk membersihkan karakter tak terlihat
const db = new Sequelize(
  process.env.DB_NAME?.trim(),
  process.env.DB_USER?.trim(),
  process.env.DB_PASS?.trim(),
  {
    host: process.env.DB_HOST?.trim(),
    dialect: "mysql",
    logging: false, // opsional: nonaktifkan log query ke konsol
  }
);

export default db;
