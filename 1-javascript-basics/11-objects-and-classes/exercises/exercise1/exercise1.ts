const fruits: { [fruit: string]: number } = {
	banana: 118,
	apple: 85,
	mango: 200,
	lemon: 65,
};

const printWeight = (fruit: string): string => {
	let name: string = fruit.toLowerCase();

	if (fruits[name]) {
		return `A ${name} weighs ${fruits[name]} grams`;
	} else {
		const existingFruits = Object.keys(fruits).join(", ");

		return `Existing fruits are: ${existingFruits}`;
	}
};

console.log(printWeight("Apple"));
