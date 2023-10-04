import express from "express";

const server = express();

const port = 5000;

let counter = 0;

server.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

server.get("/counter", (request, response) => {
	const query = request.query;

	const number = parseInt(query.number);

	if (number && typeof number === "number") {
		counter = number;
	} else {
		counter++;
	}

	response.json({ response: `Service has been accessed ${counter} times` });
});
