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
	userFistName: string;
	userLastName: string;
	email: string;
	password: string;
}

export interface IUser {
	user: IUserSignUp[];
	loadingUser: boolean;
}
