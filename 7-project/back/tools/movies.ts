import axios from "axios";

const TMDBKey = process.env.TMDB_KEY;
const TMDBMoviePath = process.env.TMDB_MOVIE_PATH;
const TMDBPath = process.env.TMDB_PATH;
const TMDBDetails = process.env.TMDB_DETAILS_PATH;

const payload = {
	headers: {
		accept: "application/json",
		Authorization: TMDBKey,
	},
};

export const makeRequest = async (page: number) => {
	const baseUrl = `${TMDBMoviePath}${page}`;

	const response = await axios
		.get(baseUrl, payload)
		.then((response) => response)
		.then((response) => response.data)
		.catch((error) => console.log(error));

	console.log("MOVIE request");

	return response.results;
};

export const getDetails = async (id: number) => {
	const response = await axios
		.get(`${TMDBDetails}/${id}`, payload)
		.then((response) => response)
		.then((response) => response.data)
		.catch((error) => console.log(error));

	console.log("DETAILS processed");

	return response;
};

export const getVideos = async (id: number) => {
	const response = await axios
		.get(`${TMDBPath}/${id}/videos`, payload)
		.then((response) => response)
		.then((response) => response.data)
		.catch((error) => console.log(error));

	console.log("VIDEO processed");

	return response;
};

export const getCast = async (id: number) => {
	const response = await axios
		.get(`${TMDBPath}/${id}/credits`, payload)
		.then((response) => response)
		.then((response) => response.data)
		.catch((error) => console.log(error));

	console.log("CAST processed");

	return response;
};

export const getImageB64 = async (path: string, size: string) => {
	const TMDBImagePath = process.env.TMDB_IMAGE_PATH;

	const response = await axios
		.get(`${TMDBImagePath}${size}${path}`, { responseType: "arraybuffer" })
		.then((response) =>
			Buffer.from(response.data, "binary").toString("base64")
		);

	console.log("IMAGE processed");

	return response;
};
