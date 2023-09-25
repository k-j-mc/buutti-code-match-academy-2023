const numbers = [4, 7, 1, 8, 5];

// A.

const incrementAll = (numbersArray) => {
	const increment = numbersArray.map((number) => number + 1);

	return increment;
};

const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]

// A.

const decrementAll = (numbersArray) => {
	const decrement = numbersArray.map((number) => number - 1);

	return decrement;
};

const newNumbers2 = decrementAll(numbers);
console.log(newNumbers2); // prints [ 5, 8, 2, 9, 6 ]
