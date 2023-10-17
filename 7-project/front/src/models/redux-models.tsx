export interface MovieModel {
	id: string;
	title: string;
	length: string;
}
export interface MovieArrayModel {
	allMovies: MovieModel[];
	movie: MovieModel[];
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

export interface IUser {
	user: IUserSignUp[];
	loadingUser: boolean;
	error: string;
}

export interface IUserSignIn {
	email: string;
	password: string;
}

export interface INotification {
	timeOut: number;
	message: string;
	variant: string;
}
