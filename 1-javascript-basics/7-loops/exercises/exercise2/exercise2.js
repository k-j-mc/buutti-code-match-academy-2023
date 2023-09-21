let n = 5;
let i = 1;
let number1 = 0;
const number2 = 3;

const sequence = [];

while (i <= n) {
	number1 += number2;

	sequence.push(number1);

	i++;
}

console.log(sequence);
