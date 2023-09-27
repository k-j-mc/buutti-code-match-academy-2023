// A.
var translatorObject = {
    hello: "hei",
    world: "maailma",
    bit: "bitti",
    byte: "tavu",
    integer: "kokonaisluku",
    boolean: "totuusarvo",
    string: "merkkijono",
    network: "verkko",
};
// B.
var printTranslatableWords = function () {
    return Object.keys(translatorObject);
};
var entries = printTranslatableWords();
console.log(entries); // [ 'hello', 'world', 'bit', 'byte', 'integer', 'boolean', 'string', 'network' ]
// C.
var translate = function (term) {
    if (translatorObject[term]) {
        return translatorObject[term];
    }
    else {
        console.log("No translation exists for word word given as the argument");
        return null;
    }
};
var wordsToTranslate = ["hello", "bit", "byte", "boolean"];
var translation = wordsToTranslate.map(function (obj) { return translate(obj); });
console.log(translation); // [ 'hei', 'bitti', 'tavu', 'totuusarvo' ]
var wordsToTranslate2 = ["boolean", "hamster"];
var translation2 = wordsToTranslate2.map(function (obj) { return translate(obj); });
console.log(translation2); // [ 'hei', 'bitti', 'tavu', 'totuusarvo' ]
