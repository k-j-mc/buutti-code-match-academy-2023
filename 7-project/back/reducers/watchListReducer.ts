import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

import { userExtractor } from "../utils/middleware";

import {
	insertToWatchList,
	findUserWatchListMovieById,
	deleteUserMovieFromWatchListById,
} from "../actions/watchList";

const router = Router();

import { IUser } from "./userReducer";

declare module "express-serve-static-core" {
	interface Request {
		user?: IUser[];
		token?: string | null;
	}
	interface Response {
		user?: IUser[];
		token?: string | null;
	}
}

router.post(
	"/",
	userExtractor,
	async (request: Request, response: Response) => {
		const user = request.user;

		const id = uuid();
		const date = new Date().toString();

		if (!user) {
			return response.status(401).json({
				error: "Operation not permitted, you must be logged in.",
			});
		} else {
			const payload = { id: id, ...request.body, date_added: date };

			const found = await findUserWatchListMovieById(
				payload.movie_id,
				payload.user_id
			);
			console.log(found);

			if (found.length <= 0) {
				const result = await insertToWatchList(payload);

				if (result) {
					response.status(201).json(payload);
				} else {
					response.status(400).json({
						error: "Unable to process watch list item at this time, please try again",
					});
				}
			}
		}
	}
);

router.delete(
	"/:movie_id/:user_id",
	userExtractor,
	async (request: Request, response: Response) => {
		const user = request.user;

		if (!user) {
			return response.status(401).json({
				error: "Operation not permitted, you must be logged in.",
			});
		} else {
			const { movie_id, user_id } = request.params;

			const found = await findUserWatchListMovieById(movie_id, user_id);
			if (found.length > 0) {
				const result = await deleteUserMovieFromWatchListById(
					movie_id,
					user_id
				);
				console.log(found);
				if (result) {
					response.status(200).json(result);
				} else {
					response.status(400).json({
						error: "Unable to process watch list item at this time, please try again",
					});
				}
			} else {
				response
					.status(404)
					.json({ error: "Item not found in watch list" });
			}
		}
	}
);

export default router;
