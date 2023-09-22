const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

animals.forEach((animal) => {
	if (animal.toLowerCase().includes("e")) {
		console.log(animal);
	}
});
