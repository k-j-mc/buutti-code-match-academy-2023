import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com";

const getPostById = async (id: number) => {
	const response = await axios
		.get(`${url}/posts/${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	getUserById(response["userId"]);

	console.log(`User ID: ${response["userId"]}`);
	console.log(`Post ID: ${response["id"]}`);
	console.log(`Post Title: ${response["title"]}`);
	console.log(`Post Body: ${response["body"]}`);

	return response;
};

const data = async () => {
	return await getPostById(6);
};

data();

const getUserById = async (id: number) => {
	const response = await axios
		.get(`${url}/users/${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	console.log("\n--------------------------------------\n");
	console.log("USER INFO:");
	console.log(`User ID: ${response["id"]}`);
	console.log(`Username: ${response["username"]}`);
	console.log(`Name: ${response["name"]}`);

	return response;
};
