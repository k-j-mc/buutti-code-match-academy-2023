var factorialFunction = function (n) {
	if (n == 0) {
		return 1;
	} else {
		return n * factorialFunction(n - 1);
	}
};
console.log(factorialFunction(4));
