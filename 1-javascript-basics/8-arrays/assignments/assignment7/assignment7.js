const sortNumberArray = (array) => {
	for (let index = 1; index < array.length; index++) {
		for (let index2 = 0; index2 < index; index2++) {
			if (array[index] < array[index2]) {
				let item = array[index];
				array[index] = array[index2];
				array[index2] = item;
			}
		}
	}
};

const array = [4, 19, 7, 1, 9, 22, 6, 13];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
