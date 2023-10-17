import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAll = async () => {
	const response = await axios.get(`${baseUrl}/movies/`);

	return response.data;
};

const getById = async (movieId: string) => {
	const response = await axios.get(`${baseUrl}/movie/${movieId}/`);

	return response.data;
};

// eslint-disable-next-line
export default {
	getAll,
	getById,
};
