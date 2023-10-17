export interface IUserSignUp {
	userPicture: string | ArrayBuffer | null;
	userName: string;
	userFistName: string;
	userLastName: string;
	email: string;
	password: string;
}

export interface UserArrayModel {
	user: IUserSignUp[];
}
