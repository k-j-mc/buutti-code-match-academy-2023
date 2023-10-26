import { executeQuery } from "../db/db";
import { watchListQueries } from "../queries/watchList";

interface IWatchList {
	id: string;
	user_id: string;
	movie_id: string;
	date_added: string;
}

export const createWatchListTable = async () => {
	await executeQuery(watchListQueries.createTable);
	console.log("Watch List table initialized");
};

export const getAllListItems = async (id: string) => {
	console.log("Fetching movies from watch list");

	const result = await executeQuery(watchListQueries.findAllByUserId, [id]);

	return result.rows;
};

export const insertToWatchList = async (watchObj: IWatchList) => {
	console.log("Inserting a new movie to watch list");

	const params = [...Object.values(watchObj)];

	const result = await executeQuery(
		watchListQueries.insertMovieToList,
		params
	);

	return result.rows;
};

export const findUserWatchListMovieById = async (
	movie_id: string,
	user_id: string
) => {
	console.log("Finding a movie from user watch list by id");
	const result = await executeQuery(
		watchListQueries.findOneMovieListUserItem,
		[movie_id, user_id]
	);

	return result.rows;
};

export const deleteUserMovieFromWatchListById = async (
	movie_id: string,
	user_id: string
) => {
	console.log("Deleting a movie from watch list");
	const result = await executeQuery(
		watchListQueries.deleteMovieFromUserList,
		[movie_id, user_id]
	);

	return result.rows;
};
