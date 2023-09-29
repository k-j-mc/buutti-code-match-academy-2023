import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com";

const getCommentById = async (id: number) => {
	const response = await axios
		.get(`${url}/comments?postId=${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	console.log(response);

	return response;
};

const data = async () => {
	return await getCommentById(6);
};

data();
