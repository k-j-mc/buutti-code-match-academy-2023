import { Router } from "express";
import { logger } from "./middleware";
import * as argon2 from "argon2";

const router = Router();

interface newUser {
	id: number;
	name: string;
	password: string;
}

const userData = [
	{
		name: "Test User",
		id: 0,
		password:
			"$argon2id$v=19$m=65536,t=3,p=4$Y3GpqU4wE0iMGk0Ummep+w$1EnIjAq75oocNqB1Let1oOvqElD0YEHwMJe+JXYSq0I",
	},
	{
		name: "Test User 2",
		id: 2,
		password:
			"$argon2id$v=19$m=65536,t=3,p=4$nNOwJNuBkgy78gR+s/OrGsfbg$2rk9YErjaG7VkOGP93c8PU9CLE1bLiVHpKsNN/xmilw",
	},
	{
		name: "Test User 180",
		id: 180,
		password:
			"$argon2id$v=19$m=65536,t=3,p=4$nNOwJNuBkgy78gR+s/OrGg$2rk9YErjadG7VkOGP93c8PU9CLE1bLiVHpKsNN/xmilw",
	},
];

router.post("/register", async (request, response) => {
	const userName: string = request.body.userName;

	let password: string = request.body.password;

	password = await argon2.hash(password).then((result) => result);

	request.body.password = password;

	const newUser: newUser = {
		id: userData.length,
		name: userName,
		password: password,
	};

	console.log(password);
	userData.push(newUser);

	logger(request);

	response
		.status(201)
		.json({ success: `${userName}'s account successfully created!` });
});

router.post("/login", async (request, response) => {
	const userName: string = request.body.userName;

	let hash: string = request.body.password;

	hash = await argon2.hash(hash).then((result) => result);

	const result = userData.filter((obj) => {
		return obj.name.toLowerCase() === userName.toLowerCase();
	});

	if (result.length > 0) {
		const passwordMatch = await argon2
			.verify(result[0].password, request.body.password)
			.then((result) => result);
		if (passwordMatch) {
			response
				.status(204)
				.json({ success: `${userName} is now logged in!` });
		} else {
			response.status(401).json({ error: `Incorrect password!` });
		}
	} else {
		response.status(401).json({ error: `User not found!` });
	}
	request.body.password = hash;

	logger(request);
});

router.post("/admin", async (request, response) => {
	const userName: string = request.body.userName;

	let hash: string = request.body.password;

	hash = await argon2.hash(hash).then((result) => result);

	const passwordMatch = await argon2
		.verify(process.env.ADMIN_PASSWORD, request.body.password)
		.then((result) => result);

	if (process.env.ADMIN_NAME === userName) {
		if (passwordMatch) {
			response
				.status(204)
				.json({ success: `${userName} is now logged in!` });
		} else {
			response.status(401).json({ error: `Incorrect password!` });
		}
	} else {
		response.status(401).json({ error: `User not found!` });
	}
	request.body.password = hash;

	logger(request);
});

export default router;
