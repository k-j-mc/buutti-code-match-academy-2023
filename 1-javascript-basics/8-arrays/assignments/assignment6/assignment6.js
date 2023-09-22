const findLargest = (array) => {
	let highestValue = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] > highestValue) {
			highestValue = array[i];
		}
	}

	return `Highest value in array: ${highestValue}`;
};

const array = [4, 19, 7, 1, 9, 22, 6, 13];
const largest = findLargest(array);
console.log(largest); // prints 22
