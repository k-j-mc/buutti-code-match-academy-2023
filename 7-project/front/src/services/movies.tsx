import axios from "axios";

const baseUrl = "http://localhost:5000";

let token: string | null = null;

const setToken = (newToken: string | null) => {
	token = `Bearer ${newToken}`;
};

const getFeatured = async () => {
	const response = await axios
		.get(`${baseUrl}/movies/featured`)
		.then((response) => response);

	return response.data;
};

const getAction = async () => {
	const response = await axios
		.get(`${baseUrl}/movies/action`)
		.then((response) => response);

	return response.data;
};

const getAll = async () => {
	const response = await axios.get(`${baseUrl}/movies/`);

	return response.data;
};

const getById = async (movieId: string) => {
	const response = await axios.get(`${baseUrl}/movie/${movieId}/`);

	return response.data;
};

const movieService = {
	getFeatured,
	getAction,
	getAll,
	getById,
	setToken,
};

export default movieService;
