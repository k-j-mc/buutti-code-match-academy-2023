import axios from "axios";

import movieService from "./movies";
import reviewService from "./reviews";

import {
	IUserSignedIn,
	IUserSignUp,
	IUserSignIn,
} from "../models/redux-models";

const baseUrl = "http://localhost:5000";

axios.defaults.withCredentials = true;

const setLocalStorage = (user: IUserSignedIn) => {
	window.localStorage.setItem("signedInMLiBUser", JSON.stringify(user));

	return;
};

const registerUser = async (userPayload: IUserSignUp) => {
	const response = await axios.post(`${baseUrl}/user/sign-up/`, userPayload);

	return response.data;
};

const findUserBasicInfo = async (userId: string) => {
	const response = await axios.get(`${baseUrl}/user/${userId}`);

	return response.data;
};

const signUserIn = async (userPayload: IUserSignIn) => {
	const response = await axios.post(`${baseUrl}/user/sign-in/`, userPayload);

	console.log(response);

	if (response.data.token) {
		setLocalStorage(response.data);

		movieService.setToken(response.data.token);
		reviewService.setToken(response.data.token);
	}

	return response;
};

const userDetails = () => {
	const loggedUserJSON = window.localStorage.getItem("signedInMLiBUser");

	if (loggedUserJSON) {
		const user = JSON.parse(loggedUserJSON);

		return user;
	}
};

const signUserOut = async () => {
	window.localStorage.clear();
	movieService.setToken(null);

	return;
};

const userService = {
	setLocalStorage,
	registerUser,
	signUserIn,
	findUserBasicInfo,
	userDetails,
	signUserOut,
};

export default userService;
