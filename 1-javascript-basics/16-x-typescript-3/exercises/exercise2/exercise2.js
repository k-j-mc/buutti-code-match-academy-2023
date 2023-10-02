var isitArray = function (array) {
    var result = array.map(function (value) {
        if (typeof value === "number") {
            return true;
        }
        else {
            return false;
        }
    });
    return result;
};
console.log(isitArray([0, 6, 2, "string"]));
