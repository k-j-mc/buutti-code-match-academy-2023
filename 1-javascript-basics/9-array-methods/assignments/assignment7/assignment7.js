// 1.

const initialValue = 0;

const total = (array) => {
	const sumWithInitial = array.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);

	return sumWithInitial;
};

// console.log(total([1, 2, 3])); // 6

// 2.

const stringConcat = (array) => {
	const stringReducer = array.reduce((number, value) => {
		return number + value;
	}, "");

	return stringReducer;
};

// console.log(stringConcat([1, 2, 3])); // "123"

// 3.

const totalVotes = (array) => {
	const voteReducer = array.reduce((a, b) => {
		return b.voted ? ++a : a;
	}, 0);

	return voteReducer;
};

var voters = [
	{ name: "Bob", age: 30, voted: true },
	{ name: "Jake", age: 32, voted: true },
	{ name: "Kate", age: 25, voted: false },
	{ name: "Sam", age: 20, voted: false },
	{ name: "Phil", age: 21, voted: true },
	{ name: "Ed", age: 55, voted: true },
	{ name: "Tami", age: 54, voted: true },
	{ name: "Mary", age: 31, voted: false },
	{ name: "Becky", age: 43, voted: false },
	{ name: "Joey", age: 41, voted: true },
	{ name: "Jeff", age: 30, voted: true },
	{ name: "Zack", age: 19, voted: false },
];
// console.log(totalVotes(voters)); // 7

// 4.

const initialValue2 = 0;

const shoppingSpree = (array) => {
	const sumWithInitial = array.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		initialValue2
	);

	return sumWithInitial;
};

var wishlist = [
	{ title: "Tesla Model S", price: 90000 },
	{ title: "4 carat diamond ring", price: 45000 },
	{ title: "Fancy hacky Sack", price: 5 },
	{ title: "Gold fidgit spinner", price: 2000 },
	{ title: "A second Tesla Model S", price: 90000 },
];

// console.log(shoppingSpree(wishlist)); // 227005

// 5.

const flatten = (array) => {
	const flattenArray = array.reduce((a, b) => {
		return a.concat(b);
	});
	return flattenArray;
};

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6.

const initialValue3 = 0;
let numYoungVotes = 0;
let numYoungPeople = 0;
let numMidVotesPeople = 0;
let numMidsPeople = 0;
let numOldVotesPeople = 0;
let numOldsPeople = 0;

const voters2 = [
	{ name: "Bob", age: 30, voted: true },
	{ name: "Jake", age: 32, voted: true },
	{ name: "Kate", age: 25, voted: false },
	{ name: "Sam", age: 20, voted: false },
	{ name: "Phil", age: 21, voted: true },
	{ name: "Ed", age: 55, voted: true },
	{ name: "Tami", age: 54, voted: true },
	{ name: "Mary", age: 31, voted: false },
	{ name: "Becky", age: 43, voted: false },
	{ name: "Joey", age: 41, voted: true },
	{ name: "Jeff", age: 30, voted: true },
	{ name: "Zack", age: 19, voted: false },
];

const voterResults = (array) => {
	const sumWithInitial = array.reduce(
		(accumulator, currentValue, index, array) => {
			if (
				(accumulator.age,
				currentValue.age >= 18 && accumulator,
				currentValue.age < 26)
			) {
				if ((accumulator.voted, currentValue.voted)) {
					numYoungVotes++;
				}
				numYoungPeople++;
			} else if (
				(accumulator.age,
				currentValue.age >= 26 && accumulator,
				currentValue.age <= 35)
			) {
				if ((accumulator.voted, currentValue.voted)) {
					numMidVotesPeople++;
				}
				numMidsPeople++;
			} else if (
				(accumulator.age,
				currentValue.age >= 36 && accumulator,
				currentValue.age < 55)
			) {
				if ((accumulator.voted, currentValue.voted)) {
					numOldVotesPeople++;
				}
				numOldsPeople++;
			}

			const result = {
				numYoungVotes: numYoungVotes,
				numYoungPeople: numYoungPeople,
				numMidVotesPeople: numMidVotesPeople,
				numMidsPeople: numMidsPeople,
				numOldVotesPeople: numOldVotesPeople,
				numOldsPeople: numOldsPeople,
			};

			return result;
		},
		0
	);

	return sumWithInitial;
};

console.log(voterResults(voters2)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
