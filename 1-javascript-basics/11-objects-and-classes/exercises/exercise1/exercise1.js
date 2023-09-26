var fruits = {
    banana: 118,
    apple: 85,
    mango: 200,
    lemon: 65,
};
var printWeight = function (fruit) {
    var name = fruit.toLowerCase();
    if (fruits[name]) {
        return "A ".concat(name, " weighs ").concat(fruits[name], " grams");
    }
    else {
        var existingFruits = Object.keys(fruits).join(", ");
        return "Existing fruits are: ".concat(existingFruits);
    }
};
console.log(printWeight("Apple"));
