import { MovieModel, MovieArrayModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialMovieState: MovieArrayModel = {
	allMovies: [],
	movie: {
		id: "0",
		title: "",
		length: "",
	},
	// loading: true,
	loadingAllMovies: true,
	loadingMovie: true,
};

const movieSlice = createSlice({
	name: "movie",
	initialState: initialMovieState,
	reducers: {
		setMovies(state, action: PayloadAction<MovieModel[]>) {
			state.loadingAllMovies = false;
			state.allMovies = action.payload;
		},
		setParticularMovie(state, action: PayloadAction<MovieModel>) {
			state.loadingMovie = false;
			state.movie = action.payload;
		},
	},
});
export default movieSlice;
