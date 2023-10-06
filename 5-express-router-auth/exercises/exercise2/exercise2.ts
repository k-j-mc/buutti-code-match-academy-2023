import express from "express";

import studentRouter from "./studentRouter";
import { unknownEndpoint, logger, logData } from "./middleware.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const port = 5000;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

app.use("/", studentRouter);

app.get("/logger", (request, response) => {
	logger(request);
	response.status(200).json(logData);
});

app.use(unknownEndpoint);
app.use(logger);
