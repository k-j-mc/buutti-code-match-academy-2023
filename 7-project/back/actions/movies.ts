import { executeQuery } from "../db/db";
import { movieQueries } from "../queries/movies";

import { IMovie, IMovieDetails, IVideos, ICast } from "../models/movies";

export const createMoviesTable = async () => {
	await executeQuery(movieQueries.createTable);
	console.log("Movies table initialized");
};

export const createMoviesDetailsTable = async () => {
	await executeQuery(movieQueries.createMovieDetailsTable);
	console.log("Details table initialized");
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

	const params = [
		...Object.values({
			id: movie.id,
			adult: movie.adult,
			backdrop_path: movie.backdrop_path,
			genre_ids: movie.genre_ids,
			TMDB_id: movie.TMDB_id,
			original_language: movie.original_language,
			original_title: movie.original_title,
			overview: movie.overview,
			popularity: movie.popularity,
			poster_path: movie.poster_path,
			release_date: movie.release_date,
			title: movie.title,
			vote_average: movie.vote_average,
			vote_count: movie.vote_count,
			backdrop: movie.backdrop,
			poster: movie.poster,
		}),
	];

	const result = await executeQuery(movieQueries.insertMovie, params);

	return result.rows;
};

export const insertMovieDetails = async (movieDetails: IMovieDetails) => {
	console.log("Inserting movie details");

	const params = [
		...Object.values({
			id: movieDetails.id,
			budget: movieDetails.budget,
			homepage: movieDetails.homepage,
			imdb_id: movieDetails.imdb_id,
			TMDB_id: movieDetails.TMDB_id,
			production_companies: movieDetails.production_companies,
			revenue: movieDetails.revenue,
			runtime: movieDetails.runtime,
			spoken_languages: movieDetails.spoken_languages,
			tagline: movieDetails.tagline,
			cast: movieDetails.cast,
		}),
	];

	const result = await executeQuery(movieQueries.insertDetails, params);

	return result.rows;
};

export const insertMovieVideos = async (movieVideos: IVideos) => {
	console.log("Inserting movie videos");

	const params = [
		...Object.values({
			id: movieVideos.id,
			name: movieVideos.name,
			key: movieVideos.key,
			site: movieVideos.site,
			size: movieVideos.size,
			type: movieVideos.type,
			official: movieVideos.official,
			published_at: movieVideos.published_at,
		}),
	];

	const result = await executeQuery(movieQueries.insertVideos, params);

	return result.rows;
};

export const insertMovieCast = async (cast: ICast) => {
	console.log("Inserting movie cast");

	const params = [
		...Object.values({
			id: cast.id,
			TMDB_id: cast.TMDB_id,
			name: cast.name,
			popularity: cast.popularity,
			character: cast.character,
			credit_id: cast.credit_id,
			order: cast.order,
		}),
	];

	const result = await executeQuery(movieQueries.insertActors, params);

	return result.rows;
};

export const findOneMovieById = async (id: string) => {
	const result = await executeQuery(movieQueries.findMovieById, [id]);

	console.log(result.rows);

	return result.rows;
};

export const findActorById = async (id: string) => {
	const result = await executeQuery(movieQueries.findCastById, [id]);

	console.log(result.rows);

	return result.rows;
};
