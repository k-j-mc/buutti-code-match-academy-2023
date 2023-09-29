import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com";

let newItem = {
	title: "Shiny Potato",
	body: "The most awesome potato one could own",
	userId: 11,
};

// A.

const createPost = async (object: any) => {
	const response = await axios
		.post(`${url}/posts`, object)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	console.log(response);

	newItem = response;

	return response;
};

const data = async () => {
	return await createPost(newItem);
};

data();
/* 
Response: 201

{
  title: 'Shiny Potato',
  body: 'The most awesome potato one could own',
  userId: 11,
  id: 101
}

*/

// B.

newItem.title = "New title....";

const editPost = async (object: any) => {
	const response = await axios
		.put(`${url}/posts/1`, object)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	console.log(response);

	return response;
};

const data2 = async () => {
	return await editPost(newItem);
};

data2();
/*
Response: 200

{
  title: 'New title....',
  body: 'The most awesome potato one could own',
  userId: 11,
  id: 1
}
*/
