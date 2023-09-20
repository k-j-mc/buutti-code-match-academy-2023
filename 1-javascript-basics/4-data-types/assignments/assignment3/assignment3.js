const person1Age = 15;
const person2Age = 24;

const isFirstPersonOlder = person1Age > person2Age;
console.log(isFirstPersonOlder);

// A. isFirstPersonOlder is false as person2Age is of a greater value
// B. Boolean

// C.

const firstClass = [9, 6, 9];
const secondClass = [7, 10, 5];

let firstClassSum = 0;
let secondClassSum = 0;

firstClass.map((num) => {
	firstClassSum += num;
});

secondClass.map((num) => {
	secondClassSum += num;
});

firstClassAverage = firstClassSum / firstClass.length;
secondClassAverage = secondClassSum / secondClass.length;

if (firstClassAverage > secondClassAverage) {
	console.log("First class wins with an average of: " + firstClassAverage);
} else {
	console.log("Second class wins with an average of: " + secondClassAverage);
}
