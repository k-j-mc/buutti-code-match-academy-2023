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
	video: IVideo[];
	loadingFeaturedMovies: boolean;
	loadingTopRatedMovies: boolean;
	loadingActionMovies: boolean;
	loadingHorrorMovies: boolean;
	loadingAllMovies: boolean;
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
	user: IUserSignedIn | null;
	loadingUser: boolean;
	error: string;
}

export interface INotification {
	timeOut: number;
	message: string;
	variant: "success" | "info" | "warning" | "error" | undefined;
}

export interface ReviewArrayModel {
	movieReviews: IReview[];
	loadingMovieReviews: boolean;
}
