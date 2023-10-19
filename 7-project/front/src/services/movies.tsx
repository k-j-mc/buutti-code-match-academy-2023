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

const getTopRated = async () => {
	const response = await axios
		.get(`${baseUrl}/movies/top-rated`)
		.then((response) => response);

	return response.data;
};

const getAction = async () => {
	const response = await axios
		.get(`${baseUrl}/movies/action`)
		.then((response) => response);

	return response.data;
};

const getHorror = async () => {
	const response = await axios
		.get(`${baseUrl}/movies/horror`)
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

const getVideosById = async (movieId: string) => {
	const response = await axios.get(`${baseUrl}/movie/videos/${movieId}/`);

	return response.data;
};

const movieService = {
	getFeatured,
	getTopRated,
	getAction,
	getHorror,
	getAll,
	getById,
	getVideosById,
	setToken,
};

export default movieService;
