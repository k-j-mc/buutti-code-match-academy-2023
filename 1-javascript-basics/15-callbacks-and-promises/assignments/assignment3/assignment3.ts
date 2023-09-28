// A.

import axios from "axios";

const getUniversities = async () => {
	const response = await axios
		.get("http://universities.hipolabs.com/search?country=Finland")
		.then(function (response) {
			return JSON.stringify(response.data);
		})
		.catch(function (error) {
			return error;
		});
	// return console.log(JSON.parse(response));

	return JSON.parse(response);
};

// B.

const data = async () => {
	return await getUniversities();
};

data().then((response) =>
	response.map((university: any) => console.log(university.name))
);
