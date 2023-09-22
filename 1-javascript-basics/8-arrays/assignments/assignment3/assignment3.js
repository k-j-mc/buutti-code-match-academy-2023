const insertNumber = (array, item) => {
	let index = 0;

	for (let i = 0; i < array.length; i++) {
		if (item > array[i]) {
			index = i + 1;
		}
	}
	array.splice(index, 0, item);
};

const array = [1, 3, 4, 7, 11];
insertNumber(array, 8);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11 ]
insertNumber(array, 90);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11, 90 ]
