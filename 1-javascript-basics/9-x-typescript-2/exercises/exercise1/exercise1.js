var sentence = "Hello testing typescript";
function myFunction(sentence) {
    var words = sentence.split(/\S+/).length - 1;
    var length = sentence.replace(/\s/g, "").length;
    var result = {
        length: length,
        words: words,
    };
    return result;
}
console.log(myFunction(sentence));
