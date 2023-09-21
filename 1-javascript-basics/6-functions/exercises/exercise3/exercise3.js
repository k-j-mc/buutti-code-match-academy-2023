const number = 16;

console.log(number);

const increment = (number) => {
	console.log((number += 1));
	return (number += 1);
};

increment(number);

console.log(number);
