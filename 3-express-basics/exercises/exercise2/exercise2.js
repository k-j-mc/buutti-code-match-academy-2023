import express from "express";

const server = express();

const port = 3000;

server.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

server.get("/", (request, response) => {
	response.json("Hello world");
});

server.get("/2", (request, response) => {
	response.json("Hello 2 world");
});
