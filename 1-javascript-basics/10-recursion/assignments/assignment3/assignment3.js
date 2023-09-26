var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid);
    return mergeSubLists(mergeSort(left), mergeSort(right));
}
function mergeSubLists(leftList, rightList) {
    var result = [];
    while (leftList.length && rightList.length) {
        if (leftList[0] < rightList[0]) {
            result.push(leftList.shift());
        }
        else {
            result.push(rightList.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], result, true), leftList, true), rightList, true);
}
var array = [4, 19, 7, 1, 9, 22, 6, 13, 66];
var sorted = mergeSort(array);
console.log(sorted); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
