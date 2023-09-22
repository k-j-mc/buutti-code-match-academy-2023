const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

const finder = animals.find((animal) => animal.endsWith("t"));

console.log(finder);

const finderExtra = animals.find(
	(animal) => animal.endsWith("y") && animal.startsWith("d")
);

console.log(finderExtra);
