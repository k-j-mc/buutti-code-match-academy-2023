const n: number = 0;
let i: number = 0;

const factorialFunction = (n: number): number => {
	i++;

	return n * factorialFunction(n - 1);
};

console.log(factorialFunction(n));

// Repeated 10359 times
