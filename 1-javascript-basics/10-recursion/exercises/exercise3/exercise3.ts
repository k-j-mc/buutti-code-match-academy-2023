const n: number = 5;

const factorialFunction = (n: number): number => {
	if (n < 2) {
		return n;
	} else {
		return factorialFunction(n - 1) + factorialFunction(n - 2);
	}
};

for (let i = 0; i < n; i++) {
	console.log(factorialFunction(i));
}
