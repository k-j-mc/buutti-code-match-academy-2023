const classAges = [20, 35, 27, 44];

console.log(classAges);

let sumOfAges = 0;

classAges.map((age) => {
	sumOfAges += age;
});

const averageAge = sumOfAges / classAges.length;

console.log(averageAge);
