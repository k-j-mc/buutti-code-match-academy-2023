import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

import fs from "fs";

const router = Router();

interface INotes {
	id: string;
	content: string;
	date: string;
	important: boolean;
}

const id = uuid();
const date = new Date().toISOString();

const readJSON = () => {
	const dataString = fs.readFileSync("./notes.json", "utf8");
	const dataJSON = JSON.parse(dataString);

	return dataJSON;
};

const writeJSON = (data: INotes[]) => {
	fs.writeFileSync("notes.json", JSON.stringify(data));
};

router.get("/", (request: Request, response: Response) => {
	response.send("NOTES APP");
});

router.get("/notes", async (request: Request, response: Response) => {
	const data = readJSON();

	if (data) {
		response.status(200).json(data);
	} else {
		response.status(400).json({ error: "Error reading data" });
	}
});

router.post("/notes", (request: Request, response: Response) => {
	const newNote = request.body;

	newNote.date = date;
	newNote.id = id;

	const data = readJSON();

	data.push(newNote);

	writeJSON(data);

	response.status(201).json(newNote);
});

router.put("/notes/:id", (request: Request, response: Response) => {
	const id = request.params.id;

	const editedNote = request.body;

	const data = readJSON();

	data.map((note: INotes) => {
		note.id === id ? (note.important = editedNote.important) : note;
	});

	writeJSON(data);

	response.status(200).json(editedNote);
});

router.delete("/notes/:id", (request: Request, response: Response) => {
	const id = request.params.id;

	const data = readJSON();

	const newData = data.filter((note: INotes) => note.id !== id);

	writeJSON(newData);

	response.status(200).json(`DELETE notes/${id}`);
});

export default router;
