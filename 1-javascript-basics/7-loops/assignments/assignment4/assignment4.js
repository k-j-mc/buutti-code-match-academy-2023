const countVowels = (sentence, vowel) => {
	let count = 0;

	for (let i = 0; i < sentence.length; i++) {
		if (sentence.charAt(i).toLowerCase() === vowel) {
			count++;
		}
	}
	return count;
};

function checkSentenceVowels(sentence) {
	const countOfAs = countVowels(sentence, "a");
	const countOfEs = countVowels(sentence, "e");
	const countOfIs = countVowels(sentence, "i");
	const countOfOs = countVowels(sentence, "o");
	const countOfUs = countVowels(sentence, "u");
	const countOfYs = countVowels(sentence, "y");

	console.log("A letter count: " + countOfAs);
	console.log("E letter count: " + countOfEs);
	console.log("I letter count: " + countOfIs);
	console.log("O letter count: " + countOfOs);
	console.log("U letter count: " + countOfUs);
	console.log("Y letter count: " + countOfYs);

	const totalCount =
		countOfAs + countOfEs + countOfIs + countOfOs + countOfUs + countOfYs;

	console.log("Total vowel count: " + totalCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");
