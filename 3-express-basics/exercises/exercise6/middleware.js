import moment from "moment";

const data = [];

const unknownEndpoint = (request, response, next) => {
	response.status(404).json({ error: "unknown end point" });

	next();
};

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

const errorHandler = (error, request, response, next) => {
	logger.error(error.message);

	if (error.name === "userError") {
		response.status(400).send(error.message);
	}

	next(error);
};

export { unknownEndpoint, errorHandler, logger };
