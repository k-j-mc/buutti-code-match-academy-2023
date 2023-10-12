import axios from "axios";

import { INotes } from "./App";

const baseUrl = "http://localhost:3001/notes/";

const getAll = () => {
	const response = axios.get(baseUrl);

	return response.then((response) => response);
};

const create = (note: INotes) => {
	const response = axios.post(baseUrl, note);

	return response.then((response) => response);
};

const update = (note: INotes) => {
	const response = axios.put(`${baseUrl}/${note.id}`, note);

	return response.then((response) => response);
};

export { getAll, create, update };
