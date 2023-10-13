import axios from "axios";

import { INotes } from "./App";

const baseUrl = "http://localhost:5000/notes/";

const getAll = () => {
	const response = axios.get(baseUrl);

	return response.then((response) => response);
};

const create = (note: INotes) => {
	const response = axios.post(baseUrl, note);

	return response.then((response) => response);
};

const update = (note: INotes) => {
	const response = axios.put(`${baseUrl}${note.id}`, note);

	return response.then((response) => response);
};

const deleteNote = (note: INotes) => {
	const response = axios.delete(`${baseUrl}${note.id}`);

	return response.then((response) => response);
};

export { getAll, create, update, deleteNote };
