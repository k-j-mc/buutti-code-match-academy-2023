import { MovieModel, MovieArrayModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialTodoState: MovieArrayModel = {
	allMovies: [],
	movie: {
		id: "0",
		title: "",
		length: "",
	},
};

const movieSlice = createSlice({
	name: "movie",
	initialState: initialTodoState,
	reducers: {
		setMovies(state, action: PayloadAction<MovieModel[]>) {
			state.allMovies = action.payload;
		},
		setParticularMovie(state, action: PayloadAction<MovieModel>) {
			state.movie = action.payload;
		},
	},
});
export default movieSlice;
