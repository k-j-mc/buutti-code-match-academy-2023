class Robot {
	x: number;
	y: number;
	commandList: string[];
	constructor() {
		this.x = 0;
		this.y = 0;
		this.commandList = [];
	}

	handleCommandList(commandList: string) {
		this.commandList = commandList.split("");

		const commandHandlers: { [command: string]: any } = {
			N: () => this.y++,
			E: () => this.x++,
			S: () => this.y--,
			W: () => this.x--,
		};

		for (let i = 0; i < this.commandList.length; i++) {
			const command = this.commandList[i];

			if (command === "C") {
				continue;
			} else if (command === "B") {
				break;
			} else {
				const adjustXY = commandHandlers[command];

				adjustXY();
			}
		}
	}
}

const robot1 = new Robot();

robot1.handleCommandList("NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE");

console.log(robot1); //   x: 8, y: 7, ...

const robot2 = new Robot();

robot2.handleCommandList("NNCCCEEBEEEEEEEEEEEEEE");

console.log(robot2); //  x: 2, y: 2, ...
