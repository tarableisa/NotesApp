import axios from "axios";
import { BASE_URL } from "../utils";

// Helper function untuk dapatkan header Authorization
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: token ? `Bearer ${token}` : "",
  };
};

// Get all notes
export const getNotes = async () => {
  return await axios.get(BASE_URL, {
    headers: getAuthHeaders(),
  });
};

// Get note by ID
export const getNote = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`, {
    headers: getAuthHeaders(),
  });
};

// Create new note
export const createNote = async (note) => {
  return await axios.post(BASE_URL, note, {
    headers: getAuthHeaders(),
  });
};

// Update note
export const updateNote = async (id, note) => {
  return await axios.put(`${BASE_URL}/${id}`, note, {
    headers: getAuthHeaders(),
  });
};

// Delete note
export const deleteNote = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`, {
    headers: getAuthHeaders(),
  });
};
