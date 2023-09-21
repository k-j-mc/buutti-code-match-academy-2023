let n = 4;
let multiplier = 4;

const exponentValueList = (number, multiplier) => {
	let factorial = 1;

	if (number <= 0) {
		console.log("n needs to be positive");
	} else {
		for (let i = 1; i <= number; i++) {
			factorial *= multiplier;

			console.log(factorial);
		}
	}
};

exponentValueList(n, multiplier);
