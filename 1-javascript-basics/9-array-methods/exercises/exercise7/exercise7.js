const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

const filterAnimalsO = animals.filter((animal) => animal.includes("o"));

filterAnimalsO.forEach((obj) => {
	console.log(obj);
});

const filterAnimalsNoOorH = animals.filter(
	(animal) => !animal.includes("o") && !animal.includes("h")
);

filterAnimalsNoOorH.forEach((obj) => {
	console.log(obj);
});
