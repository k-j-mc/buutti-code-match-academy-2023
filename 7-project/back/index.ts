import express, { Application } from "express";
import dotenv from "dotenv";

import cors from "cors";

import { unknownEndpoint, errorHandler } from "./utils/middleware";

import movieReducer from "./reducers/movieReducer";
import reviewReducer from "./reducers/reviewReducer";
import watchListReducer from "./reducers/watchListReducer";
import adminReducer from "./reducers/adminReducer";
import userReducer from "./reducers/userReducer";

import { createUsersTable } from "./actions/user";
import { createWatchListTable } from "./actions/watchList";
import {
	createMoviesTable,
	createMoviesVideosTable,
	createActorsTable,
} from "./actions/movies";

import { createReviewsTable } from "./actions/reviews";

createUsersTable();
createWatchListTable();
createMoviesTable();
createMoviesVideosTable();
createActorsTable();
createReviewsTable();

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.use("/", movieReducer);
app.use("/reviews", reviewReducer);
app.use("/watch-list", watchListReducer);
app.use("/admin", adminReducer);
app.use("/user", userReducer);

app.listen(port, () => {
	console.log(`Back-End serving at: http://localhost:${port}`);
});

app.use(unknownEndpoint);
app.use(errorHandler);
