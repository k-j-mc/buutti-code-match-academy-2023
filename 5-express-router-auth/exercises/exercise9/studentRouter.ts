import { Router } from "express";
import { logger } from "./middleware";
import * as jwt from "jsonwebtoken";

const router = Router();

const studentData = [
	{
		name: "Test User",
		id: "0",
		email: "test@test.test",
	},
	{
		name: "Test User 2",
		id: "2",
		email: "test222222222@test.test",
	},
	{
		name: "Test User 180",
		id: "180",
		email: "test180@test180.test",
	},
];

const admin = process.env.ADMIN_NAME;

const verifyToken = (token: string) => {
	const secret = process.env.SECRET;
	const options = { expiresIn: 60 * 15 };

	let tokenScrub: string = token.substring(7, token.length);

	try {
		const verified = jwt.verify(tokenScrub, secret, options);
		return verified;
	} catch (error) {
		return null;
	}
};

router.get("/students", async (request, response) => {
	logger(request);

	let token: string = request.headers.authorization;

	const verifiedToken = await verifyToken(token);

	if (verifiedToken) {
		const idMap = studentData.map((student) => {
			return student.id;
		});

		response.status(200).json(idMap);
	} else {
		response.status(401).json({ error: "You must be logged in" });
	}
});

router.get("/student/:id", async (request, response) => {
	logger(request);

	const id = request.params.id;

	let token: string = request.headers.authorization;

	const verifiedToken = await verifyToken(token);

	if (verifiedToken) {
		const exist = studentData.filter(
			(student) => student.id.toString() === id
		);

		if (exist.length > 0) {
			response.status(200).json(exist[0]);
		} else {
			response
				.status(400)
				.json({ error: "No student found with this ID" });
		}
	} else {
		response.status(401).json({ error: "You must be logged in" });
	}
});

router.post("/student/:id", async (request, response) => {
	logger(request);

	const body = request.body;
	const id = request.params.id;
	const userName = request.body.name;
	const email = request.body.email;

	let token: string = request.headers.authorization;

	const verifiedToken = await verifyToken(token);

	if (verifiedToken) {
		if (verifiedToken.username === admin) {
			if (userName && email) {
				const exist = studentData.filter(
					(student) => student.id === id
				);

				if (exist.length === 0) {
					studentData.push({ ...body, id });
					response.status(201).json([]);
				} else {
					response
						.status(400)
						.json({ error: "Student already exists with this ID" });
				}
			} else {
				response
					.status(400)
					.json({ error: "Missing name, id or email" });
			}
		} else {
			response
				.status(400)
				.json({ error: "Only admin can perform these tasks" });
		}
	} else {
		response.status(401).json({ error: "You must be logged in" });
	}
});

router.put("/student/:id", async (request, response) => {
	logger(request);

	const id = request.params.id;
	const userName = request.body.name;
	const email = request.body.email;

	let token: string = request.headers.authorization;

	const verifiedToken = await verifyToken(token);

	if (verifiedToken) {
		if (verifiedToken.username === admin) {
			const findByIndex = studentData.findIndex(
				(student) => student.id === id
			);

			if (findByIndex >= 0) {
				if (!email && !userName) {
					response
						.status(400)
						.json({ error: "Missing email and name" });
				} else {
					if (email) {
						studentData[findByIndex].email = email;
					}
					if (userName) {
						studentData[findByIndex].name = userName;
					}
					response.status(204).json([]);
				}
			} else {
				response.status(404).json({ error: "Student not found" });
			}
		} else {
			response
				.status(400)
				.json({ error: "Only admin can perform these tasks" });
		}
	} else {
		response.status(401).json({ error: "You must be logged in" });
	}
});

router.delete("/student/:id", async (request, response) => {
	logger(request);

	const id = request.params.id;

	let token: string = request.headers.authorization;

	const verifiedToken = await verifyToken(token);

	if (verifiedToken) {
		if (verifiedToken.username === admin) {
			const findByIndex = studentData.findIndex(
				(student) => student.id === id
			);

			if (findByIndex >= 0) {
				studentData.splice(findByIndex, 1);
				response.status(204).json([]);
			} else {
				response.status(404).json({ error: "Student not found" });
			}
		} else {
			response
				.status(400)
				.json({ error: "Only admin can perform these tasks" });
		}
	} else {
		response.status(401).json({ error: "You must be logged in" });
	}
});

export default router;
