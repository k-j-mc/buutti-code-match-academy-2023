const n: number = 18;

const factorialFunction = (n: number): number => {
	if (n <= 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return factorialFunction(n - 2) * 3 + factorialFunction(n - 1);
	}
};

for (let i = 0; i < n; i++) {
	console.log(factorialFunction(i));
}
