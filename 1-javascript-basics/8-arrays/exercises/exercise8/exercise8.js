const array = [5, 7, 2, 9, 3, 13, 15, 6, 17, 24];

// A.

for (const index in array) {
	if (array[index] % 3 === 0) {
		console.log(array[index]);
	}
}

console.log("///////////");

// B.

for (const number of array) {
	if (number % 3 === 0) {
		console.log(number);
	}
}
