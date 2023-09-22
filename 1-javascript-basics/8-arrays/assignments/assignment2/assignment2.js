const numberRange = (number1, number2) => {
	const array = [];

	if (number1 > number2) {
		for (number1; number1 >= number2; number1--) {
			array.push(number1);
		}
	} else {
		for (number1; number1 <= number2; number1++) {
			array.push(number1);
		}
	}
	return array;
};

console.log(numberRange(9, 5));
