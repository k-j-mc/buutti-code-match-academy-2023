import Api from "./Api";
import { MovieModel } from "../models/redux-models";

export default {
	async getAllMovies() {
		const response = await Api().get("movies");
		return response.data;
	},
	async getParticularMovie(movieId: string) {
		const response = await Api().get("movie");
		return response.data;
	},
};
