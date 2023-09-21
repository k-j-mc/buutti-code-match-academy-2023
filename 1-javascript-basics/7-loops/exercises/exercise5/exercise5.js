// For
let sum = 1;

for (let number = 0; number < 100; number++) {
	if (sum % 3 === 0) {
		if (sum % 3 === 0 && sum % 5 === 0) {
			console.log("FizzBuzz");
		} else {
			console.log("Fizz");
		}
	} else if (sum % 5 === 0) {
		if (sum % 3 === 0 && sum % 5 === 0) {
			console.log("FizzBuzz");
		} else {
			console.log("Buzz");
		}
	} else {
		console.log(sum);
	}

	sum += 1;
}

// While

let sum2 = 1;

while (sum2 <= 100) {
	if (sum2 % 3 === 0) {
		if (sum2 % 3 === 0 && sum2 % 5 === 0) {
			console.log("FizzBuzz");
		} else {
			console.log("Fizz");
		}
	} else if (sum2 % 5 === 0) {
		if (sum2 % 3 === 0 && sum2 % 5 === 0) {
			console.log("FizzBuzz");
		} else {
			console.log("Buzz");
		}
	} else {
		console.log(sum2);
	}

	sum2 += 1;
}
