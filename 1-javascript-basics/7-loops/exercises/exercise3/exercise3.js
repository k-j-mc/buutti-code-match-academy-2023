let n = 5;
let i = 15;
let number1 = 0;
const number2 = 3;

const sequence = [];

do {
	number1 += number2;

	sequence.push(number1);

	i++;
} while (i <= n);

console.log(sequence);
