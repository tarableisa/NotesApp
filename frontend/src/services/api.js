import axios from "axios";
import { BASE_URL } from "../utils";

//const API_URL = `${BASE_URL}/notes`;

// Get all notes
export const getNotes = async () => await axios.get(BASE_URL);

// Get note by ID
export const getNote = async (id) => await axios.get(`${BASE_URL}/${id}`);

// Create new note
export const createNote = async (note) => await axios.post(BASE_URL, note);

// Update note
export const updateNote = async (id, note) => await axios.put(`${BASE_URL}/${id}`, note);

// Delete note
export const deleteNote = async (id) => await axios.delete(`${BASE_URL}/${id}`);
