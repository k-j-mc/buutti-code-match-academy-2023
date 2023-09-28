// A.

import axios from "axios";

const url = "https://fakestoreapi.com/products";

const newItem = {
	title: "Shiny Potato",
	price: 500,
	description: "The most awesome potato one could own",
	image: "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg",
	category: "Food",
};

let itemID = 20;

const getFakeStoreProducts = async () => {
	const response = await axios
		.get(url)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			return data.map((item: any) => item.title);
		})
		.catch((error) => {
			return error;
		});

	console.log(response);

	return response;
};

const data = async () => {
	return await getFakeStoreProducts();
};

data();

// B.

const addFakeStoreProduct = async () => {
	const response = await axios
		.post(url, newItem)
		.then((response) => {
			return response.data;
		})

		.catch((error) => {
			return error;
		});

	console.log(response);

	return response;
};

addFakeStoreProduct();

// C.

const deleteFakeStoreProduct = async () => {
	const response = await axios
		.delete(`${url}/${itemID}`)
		.then((response) => {
			return response.data;
		})

		.catch((error) => {
			return error;
		});

	console.log(response);

	return response;
};

deleteFakeStoreProduct();
