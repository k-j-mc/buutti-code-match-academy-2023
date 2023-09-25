var n = 0;
var i = 0;
var factorialFunction = function (n) {
	console.log(i);
	i++;

	return n * factorialFunction(n - 1);
};
console.log(factorialFunction(n));
