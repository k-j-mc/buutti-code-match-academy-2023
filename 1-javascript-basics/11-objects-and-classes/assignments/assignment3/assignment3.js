var sentenceObject = {};
var getCountOfLetters = function (sentence) {
    sentence.split("").forEach(function (letter) {
        letter !== " " &&
            (sentenceObject[letter] = ++sentenceObject[letter] || 1);
    });
    return sentenceObject;
};
var result = getCountOfLetters("a black cat");
console.log(result); // { a: 3, b: 1, l: 1, c: 2, k: 1, t: 1 }
