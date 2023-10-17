import { MovieArrayModel } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import movieService from "../services/movies";

const initialMovieState: MovieArrayModel = {
	allMovies: [],
	movie: [],
	loadingAllMovies: true,
	loadingMovie: true,
};

const movieSlice = createSlice({
	name: "movies",
	initialState: initialMovieState,
	reducers: {
		setMovies(state, action) {
			state.loadingAllMovies = false;
			state.allMovies = action.payload;
		},
		setMovie(state, action) {
			state.loadingMovie = false;
			state.movie = action.payload;
		},
	},
});

export const { setMovies, setMovie } = movieSlice.actions;

export const getMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getAll();
		dispatch(setMovies(movies));
	};
};

export const getMovieById = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		const movie = await movieService.getById(movieId);
		dispatch(setMovie(movie));
	};
};

export default movieSlice.reducer;
