import { MovieArrayModel } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import movieService from "../services/movies";

const initialMovieState: MovieArrayModel = {
	featuredMovies: [],
	topRatedMovies: [],
	actionMovies: [],
	horrorMovies: [],
	allMovies: [],
	movie: [],
	searchResults: [],
	video: [],
	loadingFeaturedMovies: true,
	loadingTopRatedMovies: true,
	loadingActionMovies: true,
	loadingHorrorMovies: true,
	loadingAllMovies: true,
	loadingMovie: true,
	loadingSearchResults: true,
	loadingVideo: true,
};

const movieSlice = createSlice({
	name: "movies",
	initialState: initialMovieState,
	reducers: {
		setFeaturedMovies(state, action) {
			state.loadingFeaturedMovies = false;
			state.featuredMovies = action.payload;
		},
		setTopRatedMovies(state, action) {
			state.loadingTopRatedMovies = false;
			state.topRatedMovies = action.payload;
		},
		setActionMovies(state, action) {
			state.loadingActionMovies = false;
			state.actionMovies = action.payload;
		},
		setHorrorMovies(state, action) {
			state.loadingHorrorMovies = false;
			state.horrorMovies = action.payload;
		},
		setAllMovies(state, action) {
			state.loadingAllMovies = false;
			state.allMovies = action.payload;
		},
		setMovie(state, action) {
			state.loadingMovie = false;
			state.movie = action.payload;
		},
		setVideos(state, action) {
			state.loadingVideo = false;
			state.video = action.payload;
		},
		setSearchResults(state, action) {
			state.searchResults = action.payload;
			state.loadingSearchResults = false;
		},
	},
});

export const {
	setFeaturedMovies,
	setActionMovies,
	setHorrorMovies,
	setAllMovies,
	setMovie,
	setVideos,
	setTopRatedMovies,
	setSearchResults,
} = movieSlice.actions;

export const getFeaturedMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getFeatured();
		dispatch(setFeaturedMovies(movies));
	};
};

export const getTopRatedMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getTopRated();
		dispatch(setTopRatedMovies(movies));
	};
};

export const getActionMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getAction();
		dispatch(setActionMovies(movies));
	};
};

export const getHorrorMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getHorror();
		dispatch(setHorrorMovies(movies));
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

export const getMovieByName = (searchQuery: string) => {
	return async (dispatch: AppDispatch) => {
		const movie = await movieService.getByName(searchQuery);
		dispatch(setSearchResults(movie));
	};
};

export const getMovieVideos = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		const movie = await movieService.getVideosById(movieId);
		dispatch(setVideos(movie));
	};
};

export default movieSlice.reducer;
