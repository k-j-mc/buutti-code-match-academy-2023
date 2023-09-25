const objectArray = [
	{ x: 14, y: 21, type: "tree", toDelete: false },
	{ x: 1, y: 30, type: "house", toDelete: false },
	{ x: 22, y: 10, type: "tree", toDelete: true },
	{ x: 5, y: 34, type: "rock", toDelete: true },
	null,
	{ x: 19, y: 40, type: "tree", toDelete: false },
	{ x: 35, y: 35, type: "house", toDelete: false },
	{ x: 19, y: 40, type: "tree", toDelete: true },
	{ x: 24, y: 31, type: "rock", toDelete: false },
];

const newArray = [];

// A.

objectArray.forEach((obj, index, array) => {
	if (obj && obj.toDelete) {
		array[index] = null;
	}
});

console.log(objectArray);

// B.

const toDelete = objectArray.map((obj) => {
	if (obj !== null) {
		newArray.push(obj);
	}
});

console.log(newArray);

// C.
// Map in theory would be slightly slower, as the new array is created, whereas forEach mutates the original array.
// Personally I prefer the idea of map as the undefined values are removed.
