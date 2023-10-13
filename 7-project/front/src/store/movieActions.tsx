import movieSlice from "./movieSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { MovieModel } from "../models/redux-models";
import movieService from "../service/movieService";

export const movieActions = movieSlice.actions;

export const fetchMovies = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch, getState) => {
		if (getState().movie.allMovies.length === 0) {
			const response: MovieModel[] = await movieService.getAllMovies();
			dispatch(movieActions.setMovies(response));
		}
	};
};
export const fetchParticularMovie = (
	movieId: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		const response: MovieModel = await movieService.getParticularMovie(
			movieId
		);
		dispatch(movieActions.setParticularMovie(response));
	};
};
