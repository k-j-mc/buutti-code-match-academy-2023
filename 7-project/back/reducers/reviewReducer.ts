import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

import {
	findReviewsByMovieId,
	findReviewByReviewId,
	insertNewReview,
	editReview,
	editReviewLikes,
	deleteMovieReview,
} from "../actions/reviews";

const router = Router();

router.get("/:id", async (request: Request, response: Response) => {
	const result = await findReviewsByMovieId(request.params.id);

	response.status(200).json(result);
});

router.post("/:id", async (request: Request, response: Response) => {
	const newReviewId = uuid();
	const reviewDate = new Date();

	const { movie_id, user_id, spoilers, title, review, rating } = request.body;

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

	const result = await insertNewReview(reviewObject);

	if (result) {
		response.status(201).json(result);
	} else {
		response.status(400).json({
			error: "Unable to process review at this time, please try again",
		});
	}
});

router.put("/:id", async (request: Request, response: Response) => {
	const id = request.params.id;
	const found = await findReviewByReviewId(id);

	if (found.length > 0) {
		if (!request.body.review) {
			const result = await editReviewLikes({ id: id, ...request.body });

			response.status(204).json(result);
		} else {
			const result = await editReview(request.body);

			response.status(204).json(result);
		}
	} else {
		response.status(404).json({ error: "Review not found" });
	}
});

router.delete("/:id", async (request: Request, response: Response) => {
	const id = request.params.id;

	const found = await findReviewByReviewId(id);

	console.log(found);

	if (found.length > 0) {
		const result = await deleteMovieReview(id);

		response.status(204).json(result);
	} else {
		response.status(404).json({ error: "Review not found" });
	}
});

export default router;
