import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

import { executeQuery } from "../db/db";

import { movieQueries } from "../queries/movies";

import {
	insertNewMovie,
	insertMovieVideos,
	insertMovieCast,
	findOneMovieById,
	findActorById,
} from "../actions/movies";

import { makeRequest, getDetails, saveImage } from "../tools/movies";

const router = Router();

import { IMovie, IMovieDetails, IVideos, ICast } from "../models/movies";

router.get("/movies", async (request: Request, response: Response) => {
	const results = await executeQuery(movieQueries.findAll);

	if (results) {
		response.status(200).json(results.rows);
	}
});

router.get("/movies/featured", async (request: Request, response: Response) => {
	const results = await executeQuery(movieQueries.findFirst10);

	if (results) {
		response.status(200).json(results.rows);
	}
});

router.get("/movies/action", async (request: Request, response: Response) => {
	const results = await executeQuery(movieQueries.findAction);

	if (results) {
		response.status(200).json(results.rows);
	}
});

router.get("/movie/:id", async (request: Request, response: Response) => {
	const result = await findOneMovieById(request.params.id);

	response.status(200).json(result);
});

router.get("/get-popular", async (request: Request, response: Response) => {
	const popularMovies = await makeRequest(1);

	let count = 0;

	for (let i = 0; i < popularMovies.length; i++) {
		let exists = await findOneMovieById(popularMovies[i].id);

		if (exists.length <= 0) {
			count++;
			let movieObject = await getDetails(popularMovies[i].id);

			const id = uuid();

			let backdrop = await saveImage(
				"w1280",
				popularMovies[i].backdrop_path,
				id,
				"backdrops"
			);
			let poster = await saveImage(
				"w500",
				popularMovies[i].poster_path,
				id,
				"posters"
			);

			let cast = movieObject.credits.cast.slice(0, 4).map((obj: any) => {
				return {
					id: uuid(),
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

			let genres = movieObject.genres.map((obj: any) => {
				return obj.id;
			});

			let productionCompanies = movieObject.production_companies.map(
				(obj: any) => {
					return obj.name;
				}
			);
			let spokenLanguages = movieObject.spoken_languages.map(
				(obj: any) => {
					return obj.name;
				}
			);

			let videos = movieObject.videos.results
				.slice(0, 9)
				.map((obj: any) => {
					return {
						id: id,
						name: obj.name,
						key: obj.key,
						site: obj.site,
						size: obj.size,
						type: obj.type,
						official: obj.official,
						published_at: obj.published_at,
					};
				});

			if (movieObject.revenue !== typeof "number") {
				movieObject.revenue = 0;
			}

			movieObject = {
				id: id,
				adult: movieObject.adult,
				backdrop: backdrop,
				budget: movieObject.budget,
				genres: genres,
				homepage: movieObject.homepage,
				tmdb_id: movieObject.id,
				imdb_id: movieObject.imdb_id,
				original_language: movieObject.original_language,
				original_title: movieObject.original_title,
				overview: movieObject.overview,
				popularity: movieObject.popularity,
				poster: poster,
				production_companies: productionCompanies,
				release_date: movieObject.release_date,
				revenue: movieObject.revenue,
				runtime: movieObject.runtime,
				spoken_languages: spokenLanguages,
				tagline: movieObject.tagline,
				title: movieObject.title,
				vote_average: movieObject.vote_average,
				vote_count: movieObject.vote_count,
			};

			insertNewMovie(movieObject);
			videos.forEach((obj: IVideos) => {
				insertMovieVideos(obj);
			});

			cast.forEach((obj: ICast) => {
				insertMovieCast(obj);
			});
		} else {
			console.log("movie already in database");
		}
	}

	if (count > 0) {
		response
			.status(201)
			.json({ message: `${count} movies added to database` });
	} else {
		response
			.status(304)
			.json({ message: `${count} movies added to database` });
	}
});

export default router;
