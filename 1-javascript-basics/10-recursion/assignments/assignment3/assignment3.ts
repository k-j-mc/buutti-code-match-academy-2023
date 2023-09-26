function mergeSort(array: number[]): number[] {
	if (array.length <= 1) {
		return array;
	}
	const mid = Math.floor(array.length / 2);
	const left = array.slice(0, mid);
	const right = array.slice(mid);

	return mergeSubLists(mergeSort(left), mergeSort(right));
}
function mergeSubLists(leftList: number[], rightList: number[]): number[] {
	const result: Array<any> = [];

	while (leftList.length && rightList.length) {
		if (leftList[0] < rightList[0]) {
			result.push(leftList.shift());
		} else {
			result.push(rightList.shift());
		}
	}

	return [...result, ...leftList, ...rightList];
}

const array = [4, 19, 7, 1, 9, 22, 6, 13, 66];
const sorted = mergeSort(array);
console.log(sorted); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
