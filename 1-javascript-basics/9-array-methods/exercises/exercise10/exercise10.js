const users = [
	{ firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
	{ firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
	{
		firstName: "Jonathan",
		lastName: "Baughn",
		role: "Enterprise Instructor",
	},
	{ firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
	{ firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
	{ firstName: "Wes", lastName: "Reid", role: "Instructor" },
	{ firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const fullStack = [];

const userLastNames = users.map((user) => {
	return user.lastName;
});

console.log(userLastNames);

const isFullStack = users.map((user) => {
	if (user.role === "Full Stack Resident") {
		fullStack.push(user);
	}
});

console.log(fullStack);

const fullName = users.map((user) => {
	return `${user.firstName} ${user.lastName}`;
});

console.log(fullName);
