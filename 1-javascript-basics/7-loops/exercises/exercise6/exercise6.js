const factorialOf = (number) => {
	let factorial = 1;

	for (let i = 1; i <= number; i++) {
		factorial *= i;
		if (factorial % 3 === 0) {
			continue;
		} else {
			console.log(factorial);
		}
	}
};

factorialOf(10);
