var sum = 0;
var scoreArray = ["AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC"];
var lookUpScore = {
    S: 8,
    A: 6,
    B: 4,
    C: 3,
    D: 2,
    F: 0,
};
// B.
var calculateAverageScore = function (sum, scoreString) {
    return sum / scoreString.length;
};
// A.
var calculateTotalScore = function (scoreString) {
    sum = 0;
    scoreString.split("").forEach(function (score) { return (sum += lookUpScore[score]); });
    return calculateAverageScore(sum, scoreString);
};
var totalScore = calculateTotalScore("DFCBDABSB");
console.log(totalScore); // sum = 33, average = 3.6666666666666665
// C.
var allScores = scoreArray.map(function (array) { return calculateTotalScore(array); });
console.log(allScores); // [ 5.375, 1.9, 5.285714285714286, 3.4444444444444446 ]
