import * as express from "express";
import * as dotenv from "dotenv";

import studentRouter from "./studentRouter";
import userRouter from "./userRouter";

import { unknownEndpoint, logger, logData } from "./middleware.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

app.use("/", studentRouter);
app.use("/", userRouter);

app.get("/logger", (request, response) => {
	logger(request);
	response.status(200).json(logData);
});

app.use(unknownEndpoint);
app.use(logger);
