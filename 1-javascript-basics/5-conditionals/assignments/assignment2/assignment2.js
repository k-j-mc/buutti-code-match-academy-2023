const number1 = 6;
const number2 = 16;
const number3 = 14;

let max = "";
let min = "";

if (number1 === number2 && number2 === number3) {
	console.log("Numbers are equal");
} else {
	if (number1 > number2 && number1 > number3) {
		max = "Number 1";
	} else if (number2 > number1 && number2 > number3) {
		max = "Number 2";
	} else if (number3 > number1 && number3 > number2) {
		max = "Number3";
	}

	if (number1 < number2 && number1 < number3) {
		min = "Number 1";
	} else if (number2 < number1 && number2 < number3) {
		min = "Number 2";
	} else if (number3 < number1 && number3 < number2) {
		min = "Number3";
	}

	console.log(`${max} is the highest value number.`);
	console.log(`${min} is the lowest value number.`);
}
