export interface IUserSignUp {
	userPicture: string | ArrayBuffer | null;
	userName: string;
	userFirstName: string;
	userLastName: string;
	email: string;
	password: string;
}

export interface UserArrayModel {
	user: IUserSignUp[];
}

export interface IUserSignIn {
	email: string;
	password: string;
}
