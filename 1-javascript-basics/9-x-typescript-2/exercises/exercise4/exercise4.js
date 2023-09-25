var array = [97, 100, 115, 102, 32, 113, 119, 101, 114, 116, 121];
var sentence = "adsf qwerty";
// String.fromCharCode.apply(String, array);
function soryMyArray(numberArray) {
    var arraySort = numberArray.sort(function (a, b) {
        return a - b;
    });
    return arraySort;
}
console.log(soryMyArray(array));
