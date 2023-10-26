import { executeQuery } from "../db/db";
import { userQueries } from "../queries/user";

interface IUser {
	id: string;
	email: string;
	password: string;
	userName: string;
	userFirstName: string;
	userLastName: string;
}

export const createUsersTable = async () => {
	await executeQuery(userQueries.createTable);
	console.log("Users table initialized");
};

export const insertUser = async (user: IUser) => {
	console.log("Creating new user");

	const params = [...Object.values(user)];

	const result = await executeQuery(userQueries.insertUser, params);

	return result.rows;
};

export const findUser = async (email: string) => {
	const result = await executeQuery(userQueries.findOne, [email]);

	return result.rows;
};

export const findUserBasicInfoById = async (id: string) => {
	const result = await executeQuery(userQueries.findBasicOneById, [id]);

	return result.rows;
};
