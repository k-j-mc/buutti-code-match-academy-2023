import { ReviewArrayModel } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

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
			state.loadingMovieReviews = false;
			state.movieReviews = action.payload;
		},
	},
});

export const { setReviews } = reviewSlice.actions;

export const getMovieReviews = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		let reviews = await reviewService.getReviews(movieId);

		console.log("getting reviewss");
		for (let i = 0; i < reviews.length; i++) {
			let info = await userService.findUserBasicInfo(reviews[i].user_id);
			reviews[i].userName = info[0].userName;
			reviews[i].userFirstName = info[0].userFirstName;
			reviews[i].userLastName = info[0].userLastName;
		}

		dispatch(setReviews(reviews));
	};
};

export default reviewSlice.reducer;
