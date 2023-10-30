import { executeQuery } from "../db/db";
import { movieQueries } from "../queries/movies";

import { IMovie, IMovieDetails, IVideos, ICast } from "../models/movies";

export const createMoviesTable = async () => {
	await executeQuery(movieQueries.createTable);
	console.log("Movies table initialized");
};

export const createMoviesVideosTable = async () => {
	await executeQuery(movieQueries.createMovieVideosTable);
	console.log("Videos table initialized");
};

export const createActorsTable = async () => {
	await executeQuery(movieQueries.createCastTable);
	console.log("Cast table initialized");
};

export const insertNewMovie = async (movie: IMovie) => {
	console.log("Inserting a new movie");

	const params = [...Object.values(movie)];

	const result = await executeQuery(movieQueries.insertMovie, params);

	return result.rows;
};

export const insertMovieVideos = async (movieVideos: IVideos) => {
	console.log("Inserting movie videos");

	const params = [...Object.values(movieVideos)];

	const result = await executeQuery(movieQueries.insertVideos, params);

	return result.rows;
};

export const insertMovieCast = async (cast: ICast) => {
	console.log("Inserting movie cast");

	const params = [...Object.values(cast)];

	const result = await executeQuery(movieQueries.insertCast, params);

	return result.rows;
};

export const findOneMovieById = async (id: string) => {
	const result = await executeQuery(movieQueries.findMovieById, [id]);

	return result.rows;
};

export const findOneMovieByTMDBId = async (id: string) => {
	const result = await executeQuery(movieQueries.findMovieByTMDBId, [id]);

	return result.rows;
};

export const findOneMovieVideosById = async (id: string) => {
	const result = await executeQuery(movieQueries.findVideosById, [id]);

	return result.rows;
};

export const findActorByMovieUid = async (id: string) => {
	const result = await executeQuery(movieQueries.findCastByMovieId, [id]);

	return result.rows;
};

export const findActorById = async (id: string) => {
	const result = await executeQuery(movieQueries.findCastById, [id]);

	return result.rows;
};
