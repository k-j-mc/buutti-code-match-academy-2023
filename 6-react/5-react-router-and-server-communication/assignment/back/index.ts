import express, { Application } from "express";

import cors from "cors";

import notesRouter from "./notesRouter";

const app: Application = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use("/", notesRouter);

app.listen(port, () => {
	console.log(`Back-End serving at: http://localhost:${port}`);
});
