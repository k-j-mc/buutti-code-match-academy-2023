import axios from "axios";

const baseUrl = "http://localhost:5000";

let token: string | null = null;

const setToken = (newToken: string | null) => {
	token = `Bearer ${newToken}`;
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
	getAll,
	getById,
	setToken,
};

export default movieService;
