import axios from "axios";

import { IUserSignUp } from "../models/redux-models";

const baseUrl = "http://localhost:5000";

const registerUser = async (userPayload: IUserSignUp) => {
	const response = await axios.post(`${baseUrl}/user/sign-up/`, userPayload);

	return response.data;
};

// eslint-disable-next-line
export default {
	registerUser,
};
