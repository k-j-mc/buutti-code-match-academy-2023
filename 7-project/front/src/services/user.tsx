import axios from "axios";

import { IUserSignUp, IUserSignIn } from "../models/redux-models";

const baseUrl = "http://localhost:5000";

const registerUser = async (userPayload: IUserSignUp) => {
	const response = await axios.post(`${baseUrl}/user/sign-up/`, userPayload);

	return response.data;
};

const signUserIn = async (userPayload: IUserSignIn) => {
	const response = await axios.post(`${baseUrl}/user/sign-in/`, userPayload);

	return response;
};

// eslint-disable-next-line
export default {
	registerUser,
	signUserIn,
};
