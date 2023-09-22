const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

const filterAnimalsO = animals.filter((animal) => animal.includes("o"));

console.log(filterAnimalsO);

const filterAnimalsNoOorH = animals.filter(
	(animal) => !animal.includes("o") && !animal.includes("h")
);

console.log(filterAnimalsNoOorH);
