import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

export const getNotes = () => axios.get(API_URL);
export const getNote = (id: number) => axios.get(`${API_URL}/${id}`);
export const createNote = (data: any) => axios.post(API_URL, data);
export const updateNote = (id: number, data: any) => axios.put(`${API_URL}/${id}`, data);
export const deleteNote = (id: number) => axios.delete(`${API_URL}/${id}`);
