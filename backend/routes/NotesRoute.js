import express from "express";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/NotesController.js";

import {
  Register,
  Login,
  refreshToken,
  logout,
} from "../controllers/UsersController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// User Routes
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

//notes routes
router.get("/notes", verifyToken, getNotes);
router.get("/notes/:id", verifyToken, getNoteById);
router.post("/notes", verifyToken, createNote);
router.put("/notes/:id", verifyToken, updateNote);
router.delete("/notes/:id", verifyToken, deleteNote);


router.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default router;
