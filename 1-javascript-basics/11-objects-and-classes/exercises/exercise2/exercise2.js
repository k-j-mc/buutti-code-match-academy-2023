var student = {
    name: "Aili",
    credits: 45,
    courseGrades: {
        "Intro to Programming": 4,
        "JavaScript Basics": 3,
        "Functional Programming": 5,
    },
};
console.log(student);
student.courseGrades["Program Design"] = 3;
student.courseGrades["JavaScript Basics"] = 4;
console.log(student);
