const numberArray: number[] = [
	Math.floor(Math.random() * 1000),
	Math.floor(Math.random() * 1000),
	Math.floor(Math.random() * 1000),
	Math.floor(Math.random() * 1000),
	Math.floor(Math.random() * 1000),
	Math.floor(Math.random() * 1000),
	Math.floor(Math.random() * 1000),
	Math.floor(Math.random() * 1000),
];

function soryMyArray(numberArray: number[]) {
	const arraySort = numberArray.sort((a, b) => {
		return a - b;
	});

	return arraySort;
}

console.log(soryMyArray(numberArray));
