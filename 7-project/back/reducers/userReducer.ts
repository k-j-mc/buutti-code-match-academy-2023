import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const router = Router();

interface IUser {
	id: string;
	email: string;
	password: string;
	userName: string;
	userFirstName: string;
	userLastName: string;
	userPicture: string | ArrayBuffer | null;
	token: string;
}

const userData: IUser[] = [
	{
		id: "e24f5f76-29f6-46f8-9eaf-480b0cf18c46",
		userName: "HT",
		email: "test@test.fi",
		password:
			"$argon2id$v=19$m=65536,t=3,p=4$XwhYrUdH+3x/09+2I9Jt3w$SL0NNOwKJUt5XjN5wi+RGVn4aIHwFf+WD8rnTsQnNvw",
		// qwerty
		userFirstName: "hello",
		userLastName: "test",
		userPicture: null,
		token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5maSIsImlhdCI6MTY5NzUzMzcyOCwiZXhwIjoxNjk3NTM0NjI4fQ.iWgI8PQxZM-ph3B-MVoB-a1jEKP7SsjZBZWnB6dkNVU",
	},
];

export const getToken = async (email: string) => {
	const payload = { email: email };

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

router.get("/:id", (request: Request, response: Response) => {
	const { id } = request.params;

	response.status(200).json({
		user: "example",
		id: id,
	});
});

router.post("/sign-in", async (request: Request, response: Response) => {
	const { email, password } = request.body;

	const token = await getToken(email);

	let hash = await argon2.hash(password).then((result) => result);

	const result = userData.filter((obj) => {
		return obj.email.toLowerCase() === email.toLowerCase();
	});

	if (result.length > 0) {
		const passwordMatch = await argon2
			.verify(result[0].password, request.body.password)
			.then((result) => result);
		if (passwordMatch && token) {
			response
				.status(200)
				.json({ success: `${email} is now logged in!`, token });
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

	const token = await getToken(email);

	const passwordHash = await argon2.hash(password).then((result) => result);

	const newUser: IUser = {
		id: uuid(),
		userName: userName,
		email: email,
		password: passwordHash,
		userFirstName: userFirstName,
		userLastName: userLastName,
		userPicture: userPicture,
		token: "",
	};

	if (token) {
		userData.push(newUser);

		response.status(201).json({
			...newUser,
			success: `${userFirstName}'s account successfully created!`,
			token,
		});
	} else {
		response.status(400).json({ error: "No Token" });
	}
});

export default router;
