const array = [4, 7, 11, 5, 6, 9, 15, 7];
let index = 0;

for (let i = 0; i < array.length; i++) {
	if (array[index] < 7) {
		array.splice(index, 1);
		index--;
	}
	index++;
}

console.log(array);
