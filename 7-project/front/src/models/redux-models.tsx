export interface MovieModel {
	id: string;
	title: string;
	length: string;
}
export interface MovieArrayModel {
	allMovies: MovieModel[];
	movie: MovieModel;
	// loading: boolean;
	loadingAllMovies: boolean;
	loadingMovie: boolean;
}
