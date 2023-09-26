var n = 18;
var factorialFunction = function (n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        var something = factorialFunction(n - 2) * 3;
        var something2 = something + factorialFunction(n - 1);
        return something2;
    }
};
for (var i = 0; i < n; i++) {
    console.log(factorialFunction(i));
}
