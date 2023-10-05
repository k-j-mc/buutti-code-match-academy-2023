import express from "express";

import { unknownEndpoint, logger, logData } from "./middleware.js";

const app = express();
app.use(express.json());

const port = 5000;

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

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

app.get("/students", (request, response) => {
	logger(request);

	const idMap = studentData.map((student) => {
		return student.id;
	});

	response.status(200).json(idMap);
});

app.get("/student/:id", (request, response) => {
	logger(request);

	const id = request.params.id;

	const exist = studentData.filter((student) => student.id.toString() === id);

	if (exist.length > 0) {
		response.status(200).json(exist[0]);
	} else {
		response.status(400).json({ error: "No student found with this ID" });
	}
});

app.post("/student/:id", (request, response) => {
	logger(request);

	const body = request.body;
	const id = request.params.id;
	const userName = request.body.name;
	const email = request.body.email;

	if (userName && email) {
		const exist = studentData.filter((student) => student.id === id);

		if (exist.length === 0) {
			studentData.push({ ...body, id });
			response.status(201).json([]);
		} else {
			response
				.status(400)
				.json({ error: "Student already exists with this ID" });
		}
	} else {
		response.status(400).json({ error: "Missing name, id or email" });
	}
});

app.get("/logger", (request, response) => {
	logger(request);
	response.status(200).json(logData);
});

app.use(unknownEndpoint);
app.use(logger);
