import { IMovieMinimal } from "./movie-models";

export interface MovieInterface {
	TMDB_id: number;
	adult: boolean;
	backdrop: string;
	backdrop_path: string;
	genre_ids: number[];
	id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster: string;
	poster_path: string;
	release_date: string;
	title: string;
	vote_average: string;
	vote_count: number;
}

export interface MovieArrayModel {
	featuredMovies: IMovieMinimal[];
	actionMovies: IMovieMinimal[];
	allMovies: IMovieMinimal[];
	movie: IMovieMinimal[];
	loadingFeaturedMovies: boolean;
	loadingActionMovies: boolean;
	loadingAllMovies: boolean;
	loadingMovie: boolean;
}

export interface IUserSignUp {
	userPicture: string | ArrayBuffer | null;
	userName: string;
	userFirstName: string;
	userLastName: string;
	email: string;
	password: string;
}

export interface IUserSignIn {
	email: string;
	password: string;
}

export interface IUserSignedIn {
	id: string;
	userName: string;
	email: string;
	password: string;
	userFirstName: string;
	userLastName: string;
	userPicture: string | null;
	token: string;
}

export interface IUser {
	user: IUserSignedIn;
	loadingUser: boolean;
	error: string;
}

export interface INotification {
	timeOut: number;
	message: string;
	variant: string;
}
