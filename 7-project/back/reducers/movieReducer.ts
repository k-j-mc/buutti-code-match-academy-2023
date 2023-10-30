import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

import { executeQuery } from "../db/db";

import { movieQueries } from "../queries/movies";

import {
	insertNewMovie,
	insertMovieVideos,
	insertMovieCast,
	findOneMovieById,
	findOneMovieByTMDBId,
	findOneMovieVideosById,
	findOneMovieByName,
	findActorById,
	findActorByMovieUid,
} from "../actions/movies";

import {
	makeRequest,
	getDetails,
	saveImage,
	processCast,
} from "../tools/movies";

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

router.get(
	"/movies/top-rated",
	async (request: Request, response: Response) => {
		const results = await executeQuery(movieQueries.findTop20);

		if (results) {
			response.status(200).json(results.rows);
		}
	}
);

router.get("/movies/action", async (request: Request, response: Response) => {
	const results = await executeQuery(movieQueries.findTopAction);

	if (results) {
		response.status(200).json(results.rows);
	}
});

router.get("/movies/horror", async (request: Request, response: Response) => {
	const results = await executeQuery(movieQueries.findTopHorror);

	if (results) {
		response.status(200).json(results.rows);
	}
});

router.get("/movie/:id", async (request: Request, response: Response) => {
	const movies = await findOneMovieById(request.params.id);
	const cast = await findActorByMovieUid(request.params.id);

	const result = [{ ...movies[0], cast }];

	response.status(200).json(result);
});

router.get("/movies/:name", async (request: Request, response: Response) => {
	const result = await findOneMovieByName(request.params.name);

	response.status(200).json(result);
});

router.get(
	"/movie/videos/:id",
	async (request: Request, response: Response) => {
		const result = await findOneMovieVideosById(request.params.id);

		response.status(200).json(result);
	}
);

router.get("/get-popular", async (request: Request, response: Response) => {
	const popularMovies = await makeRequest(10);

	let count = 0;

	for (let i = 0; i < popularMovies.length; i++) {
		let exists = await findOneMovieByTMDBId(popularMovies[i].id);

		if (exists.length <= 0) {
			count++;
			let movieObject = await getDetails(popularMovies[i].id);

			const id = uuid();

			processCast({ ...movieObject, uid: id });

			let backdrop;

			if (popularMovies[i].backdrop_path !== null) {
				backdrop = await saveImage(
					"w1280",
					popularMovies[i].backdrop_path,
					id,
					"backdrops"
				);
			} else {
				backdrop = "";
			}

			let poster = await saveImage(
				"w500",
				popularMovies[i].poster_path,
				id,
				"posters"
			);

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

			if (movieObject.idmb_id === undefined) {
				movieObject.imdb_id = "";
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
				video_count: videos.length,
				vote_average: movieObject.vote_average,
				vote_count: movieObject.vote_count,
			};

			insertNewMovie(movieObject);
			videos.forEach((obj: IVideos) => {
				insertMovieVideos(obj);
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
