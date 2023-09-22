const reverseWords = (sentence) => {
	const words = sentence.split(" ");
	const array = [];

	for (let i = 0; i < words.length; i++) {
		const reversed = words[i].split("").reverse().join("");
		array.push(reversed);
	}
	const result = array.join(" ").toString();

	return result;
};

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
