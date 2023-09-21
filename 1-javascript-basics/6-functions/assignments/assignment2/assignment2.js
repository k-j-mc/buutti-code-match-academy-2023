const minimum = (num1, num2, num3) => {
	const smallestNumber = [num1, num2, num3].sort((a, b) => {
		return a - b;
	});

	return smallestNumber;
};

console.log(minimum(55, 5, 63));
console.log(minimum(71, 33, 19));
console.log(minimum(12, 99, 77));
