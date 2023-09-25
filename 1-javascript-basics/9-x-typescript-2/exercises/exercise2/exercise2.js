var grades = ["1", 2, 3, 4, 5, 66, "98", "900"];
var result = grades.forEach(function (obj) {
    var number = Number(obj);
    if (number > 3) {
        console.log(obj);
    }
});
