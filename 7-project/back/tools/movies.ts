import axios from "axios";
import { v4 as uuid } from "uuid";
import { appendFile, existsSync } from "fs";

import { insertMovieCast, findActorById } from "../actions/movies";

import { ICast } from "../models/movies";

const TMDBKey = process.env.TMDB_KEY;
const TMDBPopularMoviePath = process.env.TMDB_POPULAR_MOVIE_PATH;
const TMDBPath = process.env.TMDB_PATH;
const TMDBDetails = process.env.TMDB_DETAILS_PATH;
const TMDBImagePath = process.env.TMDB_IMAGE_PATH;

const payload = {
	headers: {
		accept: "application/json",
		Authorization: TMDBKey,
	},
};

export const makeRequest = async (page: number) => {
	const baseUrl = `${TMDBPopularMoviePath}${page}`;

	const response = await axios
		.get(baseUrl, payload)
		.then((response) => response)
		.then((response) => response.data.results)
		.catch((error) => console.log(error));

	console.log("MOVIE request");

	return response;
};

export const getDetails = async (id: number) => {
	const response = await axios
		.get(`${TMDBDetails}/${id}?append_to_response=videos,credits`, payload)
		.then((response) => response)
		.then((response) => response.data)
		.catch((error) => console.log(error));

	console.log("DETAILS processed");

	return response;
};

export const saveImage = async (
	size: string,
	path: string,
	id: string,
	destination: string
) => {
	const result = await axios
		.get(`${TMDBImagePath}${size}${path}`, {
			responseType: "arraybuffer",
		})
		.then((response) => response);

	const fileName = `/${id}.jpg`;

	const filePath = `./public/images/${destination}${fileName}`;

	if (existsSync(filePath)) {
		console.log("file already exists");
	} else {
		appendFile(filePath, result.data, (error) => {
			if (error) {
				console.log(error);
			}
			console.log("IMAGE saved");
		});
	}

	return fileName;
};

export const processCast = async (movieObject: any) => {
	let cast = movieObject.credits.cast.slice(0, 4).map((obj: any) => {
		return {
			id: uuid(),
			movie_id: movieObject.uid,
			tmdb_id: obj.id,
			name: obj.name,
			character: obj.character,
			profile: obj.profile_path,
		};
	});

	let castLength = 4;

	if (cast.length < castLength) {
		castLength = cast.length;
	}

	for (let x = 0; x < castLength; x++) {
		let profile;
		let exists = await findActorById(cast[x].tmdb_id);
		if (exists.length <= 0) {
			if (cast[x].profile !== null) {
				profile = await saveImage(
					"w185",
					cast[x].profile,
					cast[x].tmdb_id,
					"profiles"
				);
				console.log("creating image for" + cast[x].name);
			} else {
				profile = "";
			}
			cast[x].profile = profile;
		} else {
			console.log(cast[x].name + " already has a photo");
		}
	}

	cast.forEach((obj: ICast) => {
		insertMovieCast(obj);
	});
};
