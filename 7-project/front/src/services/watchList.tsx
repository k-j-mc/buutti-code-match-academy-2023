import axios from "axios";

import { INewWatchListPayload } from "../models/redux-models";

const baseUrl = "http://localhost:5000";

axios.defaults.withCredentials = true;

let token: string | null = null;

const setToken = (newToken: string | null) => {
	token = `Bearer ${newToken}`;
};

const insertToWatchList = async (payload: INewWatchListPayload) => {
	const config = {
		headers: { Authorization: token },
	};

	const response = await axios
		.post(`${baseUrl}/watch-list/`, payload, config)
		.then((response) => response);

	return response.data;
};

const removeWatchListItem = async (movie_id: string, user_id: string) => {
	const config = {
		headers: { Authorization: token },
	};

	const response = await axios
		.delete(`${baseUrl}/watch-list/${movie_id}/${user_id}`, config)
		.then((response) => response);

	return response.data;
};

const watchListService = {
	insertToWatchList,
	removeWatchListItem,
	setToken,
};

export default watchListService;
