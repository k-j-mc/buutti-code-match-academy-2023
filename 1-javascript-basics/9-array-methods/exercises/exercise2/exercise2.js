// A.
const array = [5, 13, 2, 10, 8];

array.forEach((number, index) => {
	console.log(array[index] * number);
});

// B.

let sum = 0;

array.forEach((number) => {
	sum += number;
});

average = sum / array.length;

console.log(average);
