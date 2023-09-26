var student = {
    name: "Aili",
    credits: 45,
    courses: [
        {
            name: "Intro to Programming",
            grade: 3,
        },
    ],
};
var foundObjectDetails = student.courses.find(function (obj) { return obj; });
console.log("".concat(student.name, " got ").concat(foundObjectDetails.grade, " from ").concat(foundObjectDetails.name));
