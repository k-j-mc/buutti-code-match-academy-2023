import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

import { userExtractor } from "../utils/middleware";

import {
	findReviewsByMovieId,
	findReviewByReviewId,
	insertNewReview,
	editReview,
	editReviewLikes,
	deleteMovieReview,
} from "../actions/reviews";

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

router.get("/:id", async (request: Request, response: Response) => {
	const result = await findReviewsByMovieId(request.params.id);

	response.status(200).json(result);
});

router.post(
	"/:id",
	userExtractor,
	async (request: Request, response: Response) => {
		const user = request.user;

		const newReviewId = uuid();
		const reviewDate = new Date();

		const { movie_id, user_id, spoilers, title, review, rating } =
			request.body;

		const reviewObject = {
			id: newReviewId,
			movie_id: movie_id,
			user_id: user_id,
			published_at: reviewDate.toString(),
			spoilers: spoilers,
			title: title,
			review: review,
			rating: rating,
			likes: 0,
			dislikes: 0,
		};

		if (!user) {
			return response.status(401).json({
				error: "Operation not permitted, you must be logged in.",
			});
		} else {
			const result = await insertNewReview(reviewObject);
			if (result) {
				const userObj = {
					userName: user[0].userName,
					userFirstName: user[0].userFirstName,
					userLastName: user[0].userLastName,
					userPicture: user[0].userPicture,
				};
				response.status(200).json({ ...reviewObject, ...userObj });
			} else {
				response.status(400).json({
					error: "Unable to process review at this time, please try again",
				});
			}
		}
	}
);

router.put(
	"/:id",
	userExtractor,
	async (request: Request, response: Response) => {
		const user = request.user;

		const id = request.params.id;
		const found = await findReviewByReviewId(id);

		console.log(request.body);

		if (!user) {
			return response.status(401).json({
				error: "Operation not permitted, you must be logged in.",
			});
		} else {
			if (found.length > 0) {
				if (!request.body.review) {
					const result = await editReviewLikes({
						id: id,
						...request.body,
					});

					response.status(204).json(result);
				} else {
					const result = await editReview(request.body);

					response.status(204).json(result);
				}
			} else {
				response.status(404).json({ error: "Review not found" });
			}
		}
	}
);

router.delete(
	"/:id/:user_id",
	userExtractor,
	async (request: Request, response: Response) => {
		const user = request.user;

		const { id, user_id } = request.params;

		const found = await findReviewByReviewId(id);

		if (!user) {
			return response.status(401).json({
				error: "Operation not permitted, you must be logged in.",
			});
		} else {
			if (found.length > 0 && found[0].user_id === user_id) {
				const result = await deleteMovieReview(id);

				response.status(204).json(result);
			} else {
				response.status(404).json({ error: "Review not found" });
			}
		}
	}
);

export default router;
