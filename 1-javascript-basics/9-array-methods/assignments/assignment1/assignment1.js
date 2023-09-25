const numbers = [8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50];

// A.

const findNumber = numbers.filter((number) => {
	if (number > 20) {
		return number;
	}
});

console.log(findNumber[0]);

// B.

const findNumber2 = numbers.find((number) => {
	if (number > 20) {
		return number;
	}
});

console.log(findNumber2);

// C.

const findNumber3 = numbers.findIndex((number) => {
	if (number > 20) {
		return number;
	}
});

console.log(findNumber3);

numbers.splice(findNumber3 + 1, numbers.length - (findNumber3 + 1));

console.log(numbers);
