// Named
function sumName(number1, number2) {
	return number1 * number2;
}

// Anonymous
const sumAnon = function (number1, number2) {
	return number1 * number2;
};

// Arrow
const sumArrow = (number1, number2) => {
	return number1 * number2;
};

sumName(10, 7);
sumAnon(2, 5);
sumArrow(6, 8);
