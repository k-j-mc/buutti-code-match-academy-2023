import axios from "axios";

import {
	INewReview,
	IEditReview,
	IEditReviewLikes,
	IDeleteReview,
} from "../models/review-models";

const baseUrl = "http://localhost:5000";

let token: string | null = null;

const setToken = (newToken: string | null) => {
	token = `Bearer ${newToken}`;
};

const getReviews = async (movieId: string) => {
	const response = await axios
		.get(`${baseUrl}/reviews/${movieId}`)
		.then((response) => response);

	return response.data;
};

const insertReview = async (review: INewReview) => {
	const config = {
		headers: { Authorization: token },
	};

	const response = await axios
		.post(`${baseUrl}/reviews/${review.movie_id}`, review, config)
		.then((response) => response);

	return response.data;
};

const editReview = async (review: IEditReview) => {
	const config = {
		headers: { Authorization: token },
	};

	const response = await axios
		.put(`${baseUrl}/reviews/${review.id}`, review, config)
		.then((response) => response);

	return response.data;
};

const editReviewLikes = async (review: IEditReviewLikes) => {
	const config = {
		headers: { Authorization: token },
	};

	const response = await axios
		.put(`${baseUrl}/reviews/${review.id}`, review, config)
		.then((response) => response);

	return response.data;
};

const deleteReview = async (review: IDeleteReview) => {
	const config = {
		headers: { Authorization: token },
	};

	const response = await axios
		.delete(`${baseUrl}/reviews/${review.id}/${review.user_id}`, config)
		.then((response) => response);

	return response.data;
};

const movieService = {
	getReviews,
	insertReview,
	editReview,
	editReviewLikes,
	deleteReview,
	setToken,
};

export default movieService;
