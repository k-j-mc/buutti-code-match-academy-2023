import express, { Application } from "express";
import dotenv from "dotenv";

import cors from "cors";

import movieReducer from "./reducers/movieReducer";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/", movieReducer);

app.listen(port, () => {
	console.log(`Back-End serving at: http://localhost:${port}`);
});
