import { executeQuery } from "../db/db";
import { reviewQueries } from "../queries/reviews";

import { IReview } from "../models/reviews";

export const createReviewsTable = async () => {
	await executeQuery(reviewQueries.createReviewsTable);
	console.log("Reviews table initialized");
};

export const findReviewsByMovieId = async (id: string) => {
	const result = await executeQuery(reviewQueries.findReviewsByMovieId, [id]);

	return result.rows;
};

export const findReviewByReviewId = async (id: string) => {
	const result = await executeQuery(reviewQueries.findReviewByReviewId, [id]);

	return result.rows;
};

export const insertNewReview = async (review: IReview) => {
	console.log("Inserting a new review");

	const params = [...Object.values(review)];

	const result = await executeQuery(reviewQueries.insertReview, params);

	return result.rows;
};

export const editReview = async (review: IReview) => {
	console.log("Editing a review");

	const params = [...Object.values(review)];

	const result = await executeQuery(reviewQueries.editReviewById, params);

	return result.rows;
};

export const editReviewLikes = async (review: IReview) => {
	console.log("Editing a review's likes");

	const params = [...Object.values(review)];

	const result = await executeQuery(
		reviewQueries.editReviewLikesById,
		params
	);

	return result.rows;
};

export const deleteMovieReview = async (id: string) => {
	console.log("Deleting a review");

	const result = await executeQuery(reviewQueries.deleteReviewById, [id]);

	return result.rows;
};
