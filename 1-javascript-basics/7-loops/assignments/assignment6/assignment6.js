let x = 150;
let y = 200;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

for (let i = 0; i < commandList.length; i++) {
	const command = commandList.charAt(i);

	if (command === "B") {
		break;
	} else if (command === "C") {
		continue;
	} else if (command === "N") {
		y++;
	} else if (command === "E") {
		x++;
	} else if (command === "S") {
		y--;
	} else if (command === "W") {
		x--;
	}
}

console.log("Robot final coordinates:");
console.log("X: " + x);
console.log("Y: " + y);
