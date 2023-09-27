function fibonacci(n) {
	let fibonacci = [];

	const message = "Only positive numbers allowed";

	let counter;

	if (n < 0) {
		console.log(message);
		return undefined;
	} else if (n === 0) {
		return fibonacci;
	} else {
		fibonacci = [1];
		counter = 0;
	}

	let n1 = 0;
	let n2 = 1;

	while (counter < n) {
		let sum = n1 + n2;
		fibonacci.push(sum);

		n1 = n2;
		n2 = sum;

		counter = counter + 1;
	}

	return fibonacci;
}

console.log(fibonacci(18));
