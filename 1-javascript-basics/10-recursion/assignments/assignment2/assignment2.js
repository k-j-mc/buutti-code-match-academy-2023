var wordArray = ["The", "quick", "silver", "wolf", "is", "something"];
var tempArray = [];
var sentencify = function (word, index) {
    if (index > 0 && index < wordArray.length) {
        tempArray.push(word[index]);
        sentencify(word, index + 1);
        return tempArray.join(" ") + "!";
    }
    else {
        return word.join(" ") + "!";
    }
};
console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!"
