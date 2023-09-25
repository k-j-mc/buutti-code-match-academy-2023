const array: number[] = [97, 100, 115, 102, 32, 113, 119, 101, 114, 116, 121];

const sentence: string = "adsf qwerty";

function soryMyArray(numberArray: number[]) {
	const arraySort = numberArray.sort((a, b) => {
		return a - b;
	});

	return arraySort;
}

console.log(soryMyArray(array));
