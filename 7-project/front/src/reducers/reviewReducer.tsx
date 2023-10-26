import { ReviewArrayModel } from "../models/redux-models";
import { IEditReviewLikes, INewReview } from "../models/review-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import { setNotification } from "./notificationReducer";

import reviewService from "../services/reviews";
import userService from "../services/user";

const initialReviewState: ReviewArrayModel = {
	movieReviews: [],
	loadingMovieReviews: true,
};

const reviewSlice = createSlice({
	name: "reviews",
	initialState: initialReviewState,
	reducers: {
		setReviews(state, action) {
			state.movieReviews = action.payload;
			state.loadingMovieReviews = false;
		},
		addLikes(state, action) {
			state.movieReviews = state.movieReviews
				.map((obj) =>
					obj.id === action.payload.id
						? { ...action.payload }
						: { ...obj }
				)
				.sort((a, b) => b.likes - a.likes);
			state.loadingMovieReviews = false;
		},
		addReview(state, action) {
			state.movieReviews.push(action.payload);
			state.loadingMovieReviews = false;
		},
	},
});

export const { setReviews, addLikes, addReview } = reviewSlice.actions;

export const getMovieReviews = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		const reviews = await reviewService.getReviews(movieId);

		dispatch(setReviews(reviews));
	};
};

export const createReview = (review: INewReview) => {
	return async (dispatch: AppDispatch) => {
		await reviewService
			.insertReview(review)
			.then((response) => {
				dispatch(addReview(response));
				dispatch(
					setNotification({
						message: `Thank you for your feedback!`,
						variant: "success",
						timeOut: 5000,
					})
				);
			})
			.catch((error) =>
				dispatch(
					setNotification({
						message: error.response.data.error,
						variant: "error",
						timeOut: 0,
					})
				)
			);
	};
};

export const likeReview = (review: IEditReviewLikes) => {
	return async (dispatch: AppDispatch) => {
		const newObj = {
			id: review.id,
			likes: review.likes,
			dislikes: review.dislikes,
		};

		await reviewService.editReviewLikes(newObj);

		dispatch(addLikes(review));
	};
};

export default reviewSlice.reducer;
