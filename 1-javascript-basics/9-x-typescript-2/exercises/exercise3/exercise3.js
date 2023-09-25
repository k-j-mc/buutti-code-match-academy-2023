var numberArray = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];
function soryMyArray(numberArray) {
    var arraySort = numberArray.sort(function (a, b) {
        return a - b;
    });
    return arraySort;
}
;
console.log(soryMyArray(numberArray));
