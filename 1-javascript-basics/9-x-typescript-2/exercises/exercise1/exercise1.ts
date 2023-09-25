const sentence: string = "Hello testing typescript";

function myFunction(sentence: string) {
	const words: number = sentence.split(/\S+/).length - 1;
	const length: number = sentence.replace(/\s/g, "").length;

	const result: { length: number; words: number } = {
		length: length,
		words: words,
	};

	return result;
}

console.log(myFunction(sentence));
