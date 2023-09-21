// 1.

const sequence = [];
let sum = 0;

for (let number = 0; number < 11; number++) {
	sequence.push(sum);
	sum += 100;
}

console.log(sequence);

// 2.

const sequence2 = [];
let sum2 = 1;

for (let number = 0; number < 8; number++) {
	sequence2.push(sum2);
	sum2 *= 2;
}

console.log(sequence2);

// 3.

const sequence3 = [];
let sum3 = 3;

for (let number = 0; number < 5; number++) {
	sequence3.push(sum3);
	sum3 += 3;
}

console.log(sequence3);

// 4.

const sequence4 = [];
let sum4 = 9;

for (let number = 0; number < 10; number++) {
	sequence4.push(sum4);
	sum4 -= 1;
}

console.log(sequence4);

// 5.

const sequence5 = [];
let sum5 = 1;

for (let number = 0; number < 4; number++) {
	for (let number2 = 0; number2 < 3; number2++) {
		sequence5.push(sum5);
	}
	sum5 += 1;
}

console.log(sequence5);

// 6.

const sequence6 = [];
let sum6 = 0;

for (let number = 0; number < 3; number++) {
	for (let number2 = 0; number2 < 5; number2++) {
		sequence6.push(sum6);
		sum6 += 1;
	}
	sum6 = 0;
}

console.log(sequence6);
