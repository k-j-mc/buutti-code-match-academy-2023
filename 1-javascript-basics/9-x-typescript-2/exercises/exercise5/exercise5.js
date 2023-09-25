var charCodeArray = [];
var sumArray = function (array) {
    var result = array.reduce(function (sum, current) { return sum + current; }, 0);
    return result;
};
var convertASCII = function (sentence) {
    for (var i = 0; i < sentence.length; i++) {
        var code = sentence.charCodeAt(i);
        charCodeArray.push(code);
    }
    return charCodeArray;
};
var sentence = "Dslfelka21kjnoi350983n2n1292m12lkl2kj4";
convertASCII(sentence);
console.log(sumArray(charCodeArray));
