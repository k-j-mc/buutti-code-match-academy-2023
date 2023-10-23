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

	const genreWithNames = processGenres(response.data[0].genres);

	response.data[0].genres = genreWithNames;

	return response.data;
};

const getVideosById = async (movieId: string) => {
	const response = await axios.get(`${baseUrl}/movie/videos/${movieId}/`);

	return response.data;
};

const processGenres = (movieGenres: number[]) => {
	const genres = movieGenres.map((genre) =>
		genre === 28
			? { name: "Action", id: genre }
			: genre === 12
			? { name: "Adventure", id: genre }
			: genre === 16
			? { name: "Animation", id: genre }
			: genre === 35
			? { name: "Comedy", id: genre }
			: genre === 80
			? { name: "Crime", id: genre }
			: genre === 99
			? { name: "Documentary", id: genre }
			: genre === 18
			? { name: "Drama", id: genre }
			: genre === 10751
			? { name: "Family", id: genre }
			: genre === 14
			? { name: "Fantasy", id: genre }
			: genre === 36
			? { name: "History", id: genre }
			: genre === 27
			? { name: "Horror", id: genre }
			: genre === 10402
			? { name: "Music", id: genre }
			: genre === 9648
			? { name: "Mystery", id: genre }
			: genre === 10749
			? { name: "Romance", id: genre }
			: genre === 878
			? { name: "Sci-Fi", id: genre }
			: genre === 10770
			? { name: "TV Movie", id: genre }
			: genre === 53
			? { name: "Thriller", id: genre }
			: genre === 10752
			? { name: "War", id: genre }
			: genre === 37
			? { name: "Western", id: genre }
			: { name: "", id: genre }
	);

	return genres;
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
