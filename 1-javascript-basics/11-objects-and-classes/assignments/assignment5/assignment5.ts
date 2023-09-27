class Room {
	width: number;
	height: number;
	area: number;
	furniture: string[];

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.area = width * height;
		this.furniture = [];
	}

	getArea() {
		return this.area;
	}

	addFurniture(furniture: string) {
		this.furniture.push(furniture);
	}
}

// A.

const room = new Room(4.5, 6.0);
console.log(room); // Room { width: 4.5, height: 6 }

// B.

const area = room.getArea();
console.log(area); // prints 27

// C.

room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log(room); // prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
