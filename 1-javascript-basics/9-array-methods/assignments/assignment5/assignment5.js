const students = [
	{ name: "Sami", score: 24.75 },
	{ name: "Heidi", score: 20.25 },
	{ name: "Jyrki", score: 27.5 },
	{ name: "Helinä", score: 26.0 },
	{ name: "Maria", score: 17.0 },
	{ name: "Yrjö", score: 14.5 },
];

const getGrades = (studentArray) => {
	studentArray.map((student) => {
		let score = student.score;
		if (score < 14) {
			student.grade = 0;
		} else if (score >= 14 && score < 17) {
			student.grade = 1;
		} else if (score >= 17 && score < 20) {
			student.grade = 2;
		} else if (score >= 20 && score < 23) {
			student.grade = 3;
		} else if (score >= 23 && score < 26) {
			student.grade = 4;
		} else if (score >= 26) {
			student.grade = 5;
		}
	});
};

getGrades(students);

console.log(students);
