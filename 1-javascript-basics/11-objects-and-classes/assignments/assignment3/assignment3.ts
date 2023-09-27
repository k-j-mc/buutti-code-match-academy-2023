const sentenceObject: { [letter: string]: number } = {};

const getCountOfLetters = (sentence: string) => {
	sentence.split("").forEach((letter) => {
		letter !== " " &&
			(sentenceObject[letter] = ++sentenceObject[letter] || 1);
	});

	return sentenceObject;
};

const result = getCountOfLetters("a black cat");
console.log(result); // { a: 3, b: 1, l: 1, c: 2, k: 1, t: 1 }
