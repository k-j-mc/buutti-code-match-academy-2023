const fruitCollection = [
	{
		name: "Pear",
		weight: 178,
	},
	{
		name: "Lemon",
		weight: 120,
	},
	{
		name: "Apple",
		weight: 90,
	},
	{
		name: "Mango",
		weight: 150,
	},
];

let sum = 0;

fruitCollection.map((fruit) => {
	sum += fruit.weight;
});

const average = sum / fruitCollection.length;

console.log(`Average weight of fruits: ${average}`);

fruitCollection.map((fruit) => {
	fruit.differenceFromAverage = Math.abs(average - fruit.weight);
});

fruitCollection.sort((a, b) => {
	return a.differenceFromAverage - b.differenceFromAverage;
});

console.log(`Fruit with closest weight to average: ${fruitCollection[0].name}`);
