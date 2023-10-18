import express, { Application } from "express";
import dotenv from "dotenv";

import cors from "cors";

import movieReducer from "./reducers/movieReducer";
import adminReducer from "./reducers/adminReducer";
import userReducer from "./reducers/userReducer";

import { createUsersTable } from "./actions/user";
import {
	createMoviesTable,
	createMoviesDetailsTable,
	createMoviesVideosTable,
	createActorsTable,
} from "./actions/movies";

createUsersTable();
createMoviesTable();
createMoviesDetailsTable();
createMoviesVideosTable();
createActorsTable();

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/", movieReducer);
app.use("/admin", adminReducer);
app.use("/user", userReducer);

app.listen(port, () => {
	console.log(`Back-End serving at: http://localhost:${port}`);
});
