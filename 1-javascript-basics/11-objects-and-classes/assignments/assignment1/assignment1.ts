let sum: number = 0;

const scoreArray: string[] = ["AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC"];

const lookUpScore: { [score: string]: number } = {
	S: 8,
	A: 6,
	B: 4,
	C: 3,
	D: 2,
	F: 0,
};

// B.

const calculateAverageScore = (sum: number, scoreString: string): number => {
	return sum / scoreString.length;
};

// A.

const calculateTotalScore = (scoreString: string) => {
	sum = 0;

	scoreString.split("").forEach((score) => (sum += lookUpScore[score]));

	return calculateAverageScore(sum, scoreString);
};

const totalScore = calculateTotalScore("DFCBDABSB");
console.log(totalScore); // sum = 33, average = 3.6666666666666665

// C.

const allScores = scoreArray.map((array) => calculateTotalScore(array));
console.log(allScores); // [ 5.375, 1.9, 5.285714285714286, 3.4444444444444446 ]
