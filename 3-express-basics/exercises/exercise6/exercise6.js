import express from "express";

import { unknownEndpoint, errorHandler, logger } from "./middleware.js";

const server = express();

const port = 5000;

server.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

server.use("/students", logger);

server.use(unknownEndpoint);
server.use(errorHandler);
server.use(logger);
