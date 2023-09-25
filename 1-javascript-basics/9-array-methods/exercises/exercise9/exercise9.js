const numbers = [13, 21, 33, 17, 46, 99];
const initialValue = 0;
let sum = 0;

const sumWithInitial = numbers.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	initialValue
);

console.log(sumWithInitial);

const sumMap = numbers.map((number) => {
	sum += number;
});

console.log(sum);

// Extra: undefined and null values return NaN as the value of the sum of numbers
