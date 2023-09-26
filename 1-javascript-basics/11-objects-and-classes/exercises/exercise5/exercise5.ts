class Rectangle {
	height: number;
	width: number;
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
}

const rectangle1 = new Rectangle(6, 6);
const rectangle2 = new Rectangle(5, 15);

console.log(rectangle1); // Rectangle { height: 6, width: 6 }
console.log(rectangle2); // Rectangle { height: 5, width: 15 }
