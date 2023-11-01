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
			state.featuredMovies = action.payload;
			state.loadingFeaturedMovies = false;
		},
		setReorderedFeaturedMovies(state, action) {
			state.featuredMovies = action.payload;
			state.loadingFeaturedMovies = false;
		},
		setTopRatedMovies(state, action) {
			state.topRatedMovies = action.payload;
			state.loadingTopRatedMovies = false;
		},
		setActionMovies(state, action) {
			state.actionMovies = action.payload;
			state.loadingActionMovies = false;
		},
		setHorrorMovies(state, action) {
			state.horrorMovies = action.payload;
			state.loadingHorrorMovies = false;
		},
		setAllMovies(state, action) {
			state.allMovies = action.payload;
			state.loadingAllMovies = false;
		},
		setMovie(state, action) {
			state.movie = action.payload;
			state.loadingMovie = false;
		},
		setVideos(state, action) {
			state.video = action.payload;
			state.loadingVideo = false;
		},
		setSearchResults(state, action) {
			state.searchResults = action.payload;
			state.loadingSearchResults = false;
		},
		setMovieLoading(state, action) {
			state.loadingMovie = action.payload;
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
	setMovieLoading,
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
		dispatch(setMovieLoading(true));

		const movie = await movieService.getById(movieId);
		dispatch(setMovie(movie));
	};
};

export const getMovieByName = (searchQuery: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(setLoadingSearchResults(true));

		if (searchQuery.length > 0) {
			const movie = await movieService.getByName(searchQuery);

			if (movie.length > 0) {
				dispatch(setSearchResults(movie));
			} else {
				dispatch(setSearchResults([]));
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
