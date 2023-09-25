let charCodeArray: number[] = [];

const sumArray = (array: number[]) => {
	const result = array.reduce((sum, current) => sum + current, 0);

	return result;
};

const convertASCII = (sentence: string) => {
	for (let i = 0; i < sentence.length; i++) {
		let code = sentence.charCodeAt(i);
		charCodeArray.push(code);
	}

	return charCodeArray;
};

const sentence: string = "Dslfelka21kjnoi350983n2n1292m12lkl2kj4";

convertASCII(sentence);

console.log(sumArray(charCodeArray));
