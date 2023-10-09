var moment = require("moment");

const logData: any = [];

const unknownEndpoint = (request: any, response: any, next: any) => {
	response.status(404).json({ error: "unknown end point" });

	next();
};

const logger = (request: any) => {
	const dateAccessed = moment().format("YYYY MMMM Do");
	const timeAccessed = moment().format("HH:mm:ss");
	const method = request.method;
	const url = request.originalUrl;
	const body = request.body;
	const id = request.params.id;

	const requestInfo = {
		id: logData.length,
		accessed: {
			time: timeAccessed,
			date: dateAccessed,
		},
		requestMethod: method,
		requestEndpoint: url,
		body: { ...body, id },
	};

	logData.push(requestInfo);
};

export { unknownEndpoint, logger, logData };
