import { IMovieMinimal, MovieInterface } from "./movie-models";
import { IReview } from "./review-models";

export interface IVideo {
	id: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
}

export interface MovieArrayModel {
	featuredMovies: IMovieMinimal[];
	topRatedMovies: IMovieMinimal[];
	actionMovies: IMovieMinimal[];
	horrorMovies: IMovieMinimal[];
	allMovies: IMovieMinimal[];
	movie: MovieInterface[];
	searchResults: MovieInterface[];
	video: IVideo[];
	loadingFeaturedMovies: boolean;
	loadingTopRatedMovies: boolean;
	loadingActionMovies: boolean;
	loadingHorrorMovies: boolean;
	loadingAllMovies: boolean;
	loadingSearchResults: boolean;
	loadingMovie: boolean;
	loadingVideo: boolean;
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

export interface INewWatchListPayload {
	user_id: string;
	movie_id: string;
}

export interface IMovieListMinimal {
	id: string;
	backdrop: string;
	popularity: number;
	poster: string;
	tagline: string;
	title: string;
	video_count: number;
	vote_average: number;
	vote_count: number;
}

export interface INewWatchListItem {
	user_id: string;
	movie: IMovieListMinimal;
}

export interface IWatchList {
	id: string;
	backdrop: string;
	popularity: number;
	poster: string;
	tagline: string;
	title: string;
	video_count: number;
	vote_average: number;
	vote_count: number;
	movie_id: string;
	user_id: string;
	date_added: string;
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
	watchList: IWatchList[];
}

export interface IUser {
	user: IUserSignedIn | null;
	newUser: boolean;
	loadingUser: boolean;
	error: string;
}

export interface INotification {
	timeOut: number;
	message: string;
	variant: "success" | "info" | "warning" | "error" | undefined;
	placement: string;
}

export interface ReviewArrayModel {
	movieReviews: IReview[];
	loadingMovieReviews: boolean;
}
