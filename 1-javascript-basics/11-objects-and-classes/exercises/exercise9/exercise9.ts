class Robot {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	handleMessage(message: string) {
		if (message === "moveNorth") {
			this.y++;
		} else if (message == "moveSouth") {
			this.y--;
		}
	}
}
class FlexibleRobot extends Robot {
	handleMessage(message: string) {
		if (message === "moveEast") {
			this.x++;
		} else if (message == "moveWest") {
			this.x--;
		} else if (message === "moveNE") {
			this.x++;
			this.y++;
		} else if (message == "moveNW") {
			this.x++;
			this.y++;
		} else {
			super.handleMessage(message);
		}
	}
}

const move = new Robot(40, 40);
move.handleMessage("moveNorth");
move.handleMessage("moveNorth");
move.handleMessage("moveNorth");

const move2 = new FlexibleRobot(0, 0);

move2.handleMessage("moveNE");
move2.handleMessage("moveNE");
move2.handleMessage("moveEast");
move2.handleMessage("moveEast");

console.log(move2);
