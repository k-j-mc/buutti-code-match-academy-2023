import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

import { insertUser, findUser, findUserBasicInfoById } from "../actions/user";

const router = Router();

export interface IUser {
	id: string;
	email: string;
	password: string;
	userName: string;
	userFirstName: string;
	userLastName: string;
	userPicture: string | ArrayBuffer | null;
}

export const getToken = async (email: string, id: string) => {
	const payload = { email: email, id: id };

	const secret = process.env.SECRET;
	const options = { expiresIn: 60 * 15 };

	let token;

	if (secret) {
		token = jwt.sign(payload, secret, options);
	}
	return token;
};

router.get("/", (request: Request, response: Response) => {
	response.send("USER ENDPOINT");
});

router.get("/:id", async (request: Request, response: Response) => {
	const { id } = request.params;

	const result = await findUserBasicInfoById(id);

	if (result.length > 0) {
		response.status(200).json(result);
	} else {
		response.status(400).json({ error: "Error processing request" });
	}
});

router.post("/sign-in", async (request: Request, response: Response) => {
	const { email, password } = request.body;

	const result = await findUser(email);

	let hash = await argon2.hash(password).then((result) => result);

	const payload = { ...result[0] };
	delete payload["password"];

	if (result.length > 0) {
		const token = await getToken(email, result[0].id);

		const passwordMatch = await argon2
			.verify(result[0].password, request.body.password)
			.then((result) => result);
		if (passwordMatch && token) {
			response.status(200).json({ ...payload, token: token });
		} else {
			response.status(401).json({ error: `Incorrect password!` });
		}
	} else {
		response.status(401).json({ error: `User not found!` });
	}
	request.body.password = hash;
});

router.post("/sign-up", async (request: Request, response: Response) => {
	const {
		email,
		password,
		userName,
		userFirstName,
		userLastName,
		userPicture,
	} = request.body;

	const existingUser = await findUser(email);

	if (existingUser.length > 0) {
		response
			.status(400)
			.json({ error: "Account existing with this Email Address" });
	} else {
		const passwordHash = await argon2
			.hash(password)
			.then((result) => result);

		const newUser: IUser = {
			id: uuid(),
			email: email,
			password: passwordHash,
			userName: userName,
			userFirstName: userFirstName,
			userLastName: userLastName,
			userPicture: userPicture,
		};
		const token = await getToken(email, newUser.id);

		if (token) {
			insertUser(newUser);

			response.status(201).json({
				...newUser,
				success: `${userFirstName}'s account successfully created!`,
				token,
			});
		} else {
			response.status(400).json({ error: "No Token" });
		}
	}
});

export default router;
