const transformString = (string) => {
	const array = [];
	const reverseArray = [];

	for (let i = string.length - 1; i >= 0; i--) {
		reverseArray.push(string[i]);
	}
	for (let i = 0; i < string.length; i++) {
		array.push(string[i]);
	}

	return [array, reverseArray];
};

const isPalindrome = (string) => {
	const transform = transformString(string);

	const array = transform[0];
	const reverseArray = transform[1];

	for (let i = 0; i < array.length; i++) {
		if (array[i] === reverseArray[i]) {
			return true;
		} else {
			return false;
		}
	}
};

const string = isPalindrome("saippuakivikauppias");

console.log(string);
