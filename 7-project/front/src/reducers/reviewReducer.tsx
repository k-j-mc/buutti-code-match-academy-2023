import { ReviewArrayModel } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

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
			state.loadingMovieReviews = false;
			state.movieReviews = action.payload;
		},
	},
});

export const { setReviews } = reviewSlice.actions;

export const getMovieReviews = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		const reviews = await reviewService.getReviews(movieId);
		dispatch(setReviews(reviews));
	};
};

export default reviewSlice.reducer;
