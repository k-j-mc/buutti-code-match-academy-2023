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
			"$argon2id$v=19$m=65536,t=3,p=4$nNOwJNuBkgy78asdvs/OrGg$2rk9YErjaG7VkOGP93c8PU9CLE1bLiVHpKsNN/xmilw",
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

router.post("/", async (request, response) => {
	const userName: string = request.body.userName;

	let password: string = request.body.password;

	password = await argon2.hash(password).then((result) => result);

	request.body.password = password;

	const newUser: newUser = {
		id: userData.length,
		name: userName,
		password: password,
	};

	userData.push(newUser);

	logger(request);

	response
		.status(201)
		.json({ success: `${userName}'s account successfully created!` });
});

export default router;
