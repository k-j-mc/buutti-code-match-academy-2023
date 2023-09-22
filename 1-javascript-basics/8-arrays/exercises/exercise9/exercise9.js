const array = [
	"cherry",
	"banana",
	"coconut",
	"apple",
	"pear",
	"pineapple",
	"lemon",
	"pumpkin",
];

const array2 = [];

for (fruit of array) {
	if (fruit.length > 6) {
		array2.push(fruit);
	}
}

console.log(array2);
