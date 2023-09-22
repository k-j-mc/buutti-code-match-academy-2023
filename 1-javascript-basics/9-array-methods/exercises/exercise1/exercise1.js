const array = [];

const sentence =
	"According to all known laws of aviation, there is no way a bee should be able to fly.";

const adjustString = (sentence) => {
	const words = sentence.split(" ");
	console.log(words);

	for (let i = 0; i < words.length; i++) {
		if (words[i].toLowerCase().startsWith("a")) {
			console.log(words[i]);
		}
	}
};

adjustString(sentence);
