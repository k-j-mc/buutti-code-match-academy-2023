interface studentInterface {
	name: string;
	credits: number;
	courses: Array<courses>;
}

interface courses {
	name: string;
	grade: number;
}

const student: studentInterface = {
	name: "Aili",
	credits: 45,
	courses: [
		{
			name: "Intro to Programming",
			grade: 3,
		},
	],
};

let foundObjectDetails: any = student.courses.find((obj) => obj);

console.log(
	`${student.name} got ${foundObjectDetails.grade} from ${foundObjectDetails.name}`
);
