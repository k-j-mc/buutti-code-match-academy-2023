import { MovieArrayModel } from "../models/redux-models";
import { IMovieMinimal } from "../models/movie-models";
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
		setReorderedFeaturedMovies(state, action) {
			state.featuredMovies = action.payload;
			state.loadingFeaturedMovies = false;
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
			if (action.payload.length > 0) {
				state.searchResults = action.payload;
			} else {
				state.searchResults = [];
			}
		},
		setLoadingSearchResults(state, action) {
			state.loadingSearchResults = action.payload;
		},
	},
});

export const {
	setFeaturedMovies,
	setReorderedFeaturedMovies,
	setActionMovies,
	setHorrorMovies,
	setAllMovies,
	setMovie,
	setVideos,
	setTopRatedMovies,
	setSearchResults,
	setLoadingSearchResults,
} = movieSlice.actions;

export const getFeaturedMovies = () => {
	return async (dispatch: AppDispatch) => {
		const movies = await movieService.getFeatured();
		dispatch(setFeaturedMovies(movies));
	};
};

export const reorderFeatured = (movies: IMovieMinimal[]) => {
	return async (dispatch: AppDispatch) => {
		dispatch(setReorderedFeaturedMovies(movies));
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
		if (searchQuery.length > 0) {
			setLoadingSearchResults(true);

			const movie = await movieService.getByName(searchQuery);

			if (movie.length > 0) {
				dispatch(setSearchResults(movie));
				dispatch(setLoadingSearchResults(false));
			} else {
				dispatch(setSearchResults([]));
				dispatch(setLoadingSearchResults(false));
			}
		} else {
			dispatch(setSearchResults([]));
		}
	};
};

export const getMovieVideos = (movieId: string) => {
	return async (dispatch: AppDispatch) => {
		const movie = await movieService.getVideosById(movieId);
		dispatch(setVideos(movie));
	};
};

export default movieSlice.reducer;
