let factorial = 1;
let i = 1;

while (true) {
	i++;

	factorial *= i;

	if (factorial % 600 === 0) {
		console.log(factorial);

		break;
	}
}
