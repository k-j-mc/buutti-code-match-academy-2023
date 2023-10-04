import express from "express";
import moment from "moment";

const server = express();

const port = 5000;

const data = [];

server.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

const logger = (request, response, next) => {
	const timeAccessed = moment().format("HH:mm:ss");
	const method = request.method;
	const url = request.url;

	const requestInfo = {
		id: data.length,
		"Time accessed": timeAccessed,
		"Request method": method,
		"Request end point": url,
	};

	data.push(requestInfo);

	response.json(data);

	next();
};

server.use("/students", logger);
