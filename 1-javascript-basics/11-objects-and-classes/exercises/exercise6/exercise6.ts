class Rectangle {
	height: number;
	width: number;
	area: number;
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
		this.area = height * width;
	}
	getArea(height: number, width: number) {
		this.area = height * width;
	}
}

const rectangle1 = new Rectangle(6, 6);
const rectangle2 = new Rectangle(5, 15);
const rectangle3 = new Rectangle(5, 5);

rectangle1.getArea(rectangle1.height, rectangle1.width);
rectangle2.getArea(rectangle2.height, rectangle2.width);
rectangle3.getArea(rectangle3.height, rectangle3.width);

console.log(rectangle1); // Rectangle { height: 6, width: 6, area: 36 }
console.log(rectangle2); // Rectangle { height: 5, width: 15, area: 75 }
console.log(rectangle3); // Rectangle { height: 5, width: 5, area: 25 }
