const array = [];

let x = 150;
let y = 200;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

const commandMap = { N: 0, E: 1, S: 2, W: 3, C: 4, B: 5 };

for (let i = 0; i < commandList.length; i++) {
	const command = commandMap[commandList.charAt(i)];

	array.push(command);
}

const functionArray = [
	() => y++,
	() => x++,
	() => y--,
	() => x--,
	() => {
		return "I am useless";
	},
];

for (let i = 0; i < array.length; i++) {
	if (array[i] === 5) {
		break;
	}
	const adjustXY = functionArray[array[i]];

	adjustXY();
}

console.log("Robot final coordinates:");
console.log("X: " + x);
console.log("Y: " + y);

console.log(array);
