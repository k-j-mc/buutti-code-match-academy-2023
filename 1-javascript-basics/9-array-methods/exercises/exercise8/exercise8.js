const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

console.log(animals);

const animalLength = animals.map((animal) => {
	return animal.length;
});

console.log(animalLength);

const containsO = animals.map((animal) => {
	const animalO = animal[1] === "o";
	return animalO;
});

console.log(containsO);
