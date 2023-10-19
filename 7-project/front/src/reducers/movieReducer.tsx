import { MovieArrayModel } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import movieService from "../services/movies";

const initialMovieState: MovieArrayModel = {
	featuredMovies: [],
	actionMovies: [],
	allMovies: [],
	movie: [],
	loadingFeaturedMovies: true,
	loadingActionMovies: true,
	loadingAllMovies: true,
	loadingMovie: true,
};

const movieSlice = createSlice({
	name: "movies",
	initialState: initialMovieState,
	reducers: {
		setFeaturedMovies(state, action) {
			state.loadingFeaturedMovies = false;
			state.featuredMovies = action.payload;
		},
		setActionMovies(state, action) {
			state.loadingActionMovies = false;
			state.actionMovies = action.payload;
		},
		setAllMovies(state, action) {
			state.loadingAllMovies = false;
			state.allMovies = action.payload;
		},
		setMovie(state, action) {
			state.loadingMovie = false;
			state.movie = action.payload;
		},
	},
});

export const { setFeaturedMovies, setActionMovies, setAllMovies, setMovie } =
	movieSlice.actions;

export const getFeaturedMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getFeatured();
		dispatch(setFeaturedMovies(movies));
	};
};

export const getActionMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getAction();
		dispatch(setActionMovies(movies));
	};
};

export const getMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getAll();
		dispatch(setAllMovies(movies));
	};
};

export const getMovieById = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		const movie = await movieService.getById(movieId);
		dispatch(setMovie(movie));
	};
};

export default movieSlice.reducer;
