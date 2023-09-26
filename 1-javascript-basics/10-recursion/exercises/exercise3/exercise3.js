var n = 10;
var factorialFunction = function (n) {
    if (n < 2) {
        return n;
    }
    else {
        return factorialFunction(n - 1) + factorialFunction(n - 2);
    }
};
for (var i = 0; i < n; i++) {
    console.log(factorialFunction(i));
}
