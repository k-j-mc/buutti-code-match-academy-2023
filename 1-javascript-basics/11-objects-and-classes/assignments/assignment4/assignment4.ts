let x: number = 150;
let y: number = 200;

const commandList: string = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

const commandHandlers: { [command: string]: any } = {
	N: () => y++,
	E: () => x++,
	S: () => y--,
	W: () => x--,
};

for (let i = 0; i < commandList.length; i++) {
	const command = commandList[i];

	if (command === "C") {
		continue;
	} else if (command === "B") {
		break;
	} else {
		const adjustXY = commandHandlers[command];

		adjustXY();
	}
}

console.log("Robot final coordinates:");
console.log("X: " + x);
console.log("Y: " + y);
