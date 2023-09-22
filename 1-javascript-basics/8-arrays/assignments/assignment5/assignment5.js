const months = [
	{ name: "January", days: 31 },
	{ name: "February", days: 28 },
	{ name: "March", days: 31 },
	{ name: "April", days: 30 },
	{ name: "May", days: 31 },
	{ name: "June", days: 30 },
	{ name: "July", days: 31 },
	{ name: "August", days: 31 },
	{ name: "September", days: 30 },
	{ name: "October", days: 31 },
	{ name: "November", days: 30 },
	{ name: "December", days: 31 },
];

let number = 2;

const monthFinder = (number) => {
	const index = number - 1;

	if (number <= months.length && number > 0) {
		return `The month of ${months[index].name} has ${months[index].days} days`;
	} else {
		return "Please enter a valid number";
	}
};

console.log(monthFinder(number));
