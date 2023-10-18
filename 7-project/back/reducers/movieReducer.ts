import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

import { executeQuery } from "../db/db";

import { movieQueries } from "../queries/movies";

import {
	insertNewMovie,
	insertMovieDetails,
	insertMovieVideos,
	insertMovieCast,
	findOneMovieById,
} from "../actions/movies";

import { makeRequest, getDetails, getImageB64 } from "../tools/movies";

const router = Router();

import { IMovie, IMovieDetails, IVideos, ICast } from "../models/movies";

router.get("/movies", async (request: Request, response: Response) => {
	const results = await executeQuery(movieQueries.findAll);

	if (results) {
		response.status(200).json(results.rows);
	}
});

router.get("/movie/:id", async (request: Request, response: Response) => {
	const result = await findOneMovieById(request.params.id);

	response.status(200).json(result);
});

router.get("/get-popular", async (request: Request, response: Response) => {
	const results = await makeRequest(1);

	if (results) {
		const resultsArray = [];
		const detailsArray = [];
		const videosArray = [];
		const castArray = [];

		for (let i = 0; i < results.length; i++) {
			let search = await findOneMovieById(results[i].id);

			if (search.length <= 0) {
				let backDrop = await getImageB64(
					results[i].backdrop_path,
					"original"
				);
				let poster = await getImageB64(results[i].poster_path, "w780");

				resultsArray.push({
					...results[i],
					backdrop: backDrop,
					poster: poster,
					TMDB_id: results[i].id,
					id: uuid(),
				});
			}
		}

		for (let i = 0; i < resultsArray.length; i++) {
			let details = await getDetails(resultsArray[i].TMDB_id);

			let productionCompanies = details.production_companies.map(
				(obj: any) => {
					return obj.name;
				}
			);
			let spokenLanguages = details.spoken_languages.map((obj: any) => {
				return obj.name;
			});

			let castId = details.credits.cast.map((obj: any) => {
				return obj.id;
			});

			detailsArray.push({
				id: resultsArray[i].id,
				budget: details.budget,
				homepage: details.homepage,
				imdb_id: details.imdb_id,
				TMDB_id: details.id,
				production_companies: productionCompanies,
				revenue: details.revenue,
				runtime: details.runtime,
				spoken_languages: spokenLanguages,
				tagline: details.tagline,
				cast: castId,
			});

			let videoLength = 8;

			if (details.videos.results.length < 8) {
				videoLength = details.videos.results.length;
			}

			for (let y = 0; y < videoLength; y++) {
				videosArray.push({
					id: resultsArray[i].id,
					name: details.videos.results[y].name,
					key: details.videos.results[y].key,
					site: details.videos.results[y].site,
					size: details.videos.results[y].size,
					type: details.videos.results[y].type,
					official: details.videos.results[y].official,
					published_at: details.videos.results[y].published_at,
				});
			}

			let castLength = 20;

			if (details.credits.cast.length < 20) {
				castLength = details.credits.cast.length;
			}

			for (let x = 0; x < castLength; x++) {
				let profile = "";

				let profile_path = details.credits.cast[x].profile_path;

				if (details.credits.cast[x].profile_path === null) {
					profile_path = "";
				} else {
					profile = await getImageB64(
						details.credits.cast[x].profile_path,
						"w185"
					);
				}

				castArray.push({
					id: resultsArray[i].id,
					TMDB_id: details.credits.cast[x].id,
					name: details.credits.cast[x].name,
					popularity: details.credits.cast[x].popularity,
					character: details.credits.cast[x].character,
					credit_id: details.credits.cast[x].credit_id,
					order: details.credits.cast[x].order,
				});
			}
		}

		resultsArray.forEach((obj: IMovie) => {
			insertNewMovie(obj);
		});
		response.status(201).json("movies filled");

		detailsArray.forEach((obj: IMovieDetails) => {
			insertMovieDetails(obj);
		});
		response.status(201).json("details filled");

		videosArray.forEach((obj: IVideos) => {
			insertMovieVideos(obj);
		});
		response.status(201).json("videos filled");

		castArray.forEach((obj: ICast) => {
			insertMovieCast(obj);
		});
		response.status(201).json("cast filled");
	} else {
		response.status(400).json({ error: "No Token" });
	}
});

export default router;
