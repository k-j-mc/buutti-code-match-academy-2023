import moment from "moment";

const data = [];

const unknownEndpoint = (request, response, next) => {
	response.status(404).json({ error: "unknown end point" });

	next();
};

const logger = (request, response, next) => {
	const timeAccessed = moment().format("HH:mm:ss");
	const method = request.method;
	const url = request.originalUrl;
	const body = request.body;

	const requestInfo = {
		id: data.length,
		"Time accessed": timeAccessed,
		"Request method": method,
		"Request end point": url,
		body: body,
	};

	data.push(requestInfo);
};

const errorHandler = (error, request, response, next) => {
	if (error) {
		response.status(400).json(error.message);
	}
};

export { unknownEndpoint, errorHandler, logger, data };
