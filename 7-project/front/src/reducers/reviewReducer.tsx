import { ReviewArrayModel } from "../models/redux-models";
import {
	IEditReviewLikes,
	INewReview,
	IEditReview,
	IDeleteReview,
} from "../models/review-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import { setNotification } from "./notificationReducer";

import reviewService from "../services/reviews";

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
		editedReview(state, action) {
			state.movieReviews = state.movieReviews.map((obj) =>
				obj.id === action.payload.id
					? {
							...obj,
							title: action.payload.title,
							review: action.payload.review,
							rating: action.payload.rating,
							spoilers: action.payload.spoilers,
					  }
					: obj
			);
			state.loadingMovieReviews = false;
		},
		removeReview(state, action) {
			state.movieReviews = state.movieReviews.filter(
				(obj) => obj.id !== action.payload.id
			);
			state.loadingMovieReviews = false;
		},
	},
});

export const { setReviews, addLikes, addReview, editedReview, removeReview } =
	reviewSlice.actions;

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

		await reviewService
			.editReviewLikes(newObj)
			.then((response) => {
				dispatch(addLikes(review));
				dispatch(
					setNotification({
						message: `Feedback submitted successfully!`,
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

export const editReview = (review: IEditReview) => {
	return async (dispatch: AppDispatch) => {
		await reviewService
			.editReview(review)
			.then((response) => {
				dispatch(editedReview(review));
				dispatch(
					setNotification({
						message: `Review edited successfully!`,
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
export const deleteReview = (review: IDeleteReview) => {
	return async (dispatch: AppDispatch) => {
		await reviewService
			.deleteReview(review)
			.then((response) => {
				dispatch(removeReview(review));
				dispatch(
					setNotification({
						message: `Review successfully removed!`,
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
export default reviewSlice.reducer;
