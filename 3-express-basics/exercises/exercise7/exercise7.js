import express from "express";

import { unknownEndpoint, logger, data } from "./middleware.js";

const app = express();
app.use(express.json());

const port = 5000;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

app.get("/students", (request, response) => {
	logger(request);
	response.status(200).json(data);
});

app.use(unknownEndpoint);
app.use(logger);
