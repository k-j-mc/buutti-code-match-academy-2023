import { ReviewArrayModel } from "../models/redux-models";
import { IEditReviewLikes } from "../models/review-models";
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
	},
});

export const { setReviews, addLikes } = reviewSlice.actions;

export const getMovieReviews = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		let reviews = await reviewService.getReviews(movieId);

		for (let i = 0; i < reviews.length; i++) {
			let info = await userService.findUserBasicInfo(reviews[i].user_id);
			reviews[i].userName = info[0].userName;
			reviews[i].userFirstName = info[0].userFirstName;
			reviews[i].userLastName = info[0].userLastName;
		}

		dispatch(setReviews(reviews));
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
