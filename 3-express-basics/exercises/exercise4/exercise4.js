import express from "express";

const server = express();

const port = 5000;

const data = [{ id: 1, userName: "dave", count: 1 }];

server.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

server.get("/counter/:name", (request, response) => {
	const name = request.params.name;

	const search = data.filter(
		(person) => person.userName === name && person.count++
	);

	if (search.length > 0) {
		response.json({
			response: `Service has been accessed ${search[0].count} times by ${search[0].userName}`,
		});
	} else {
		let newUser = {
			id: data.length,
			userName: "",
			count: 1,
		};

		newUser.userName = name;

		data.push(newUser);

		response.json({
			response: `Service has been accessed ${newUser.count} times by ${newUser.userName}`,
		});
	}
});
