class Shape {
	height: number;
	width: number;
	area: number;
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
		this.area = height * width;
	}

	getArea(height: number, width: number) {
		this.area = 0;
	}
}

class Rectangle extends Shape {
	constructor(height: number, width: number) {
		super(height, width);
		this.height = height;
		this.width = width;
		this.area = height * width;
	}

	getArea(height: number, width: number) {
		this.area = height * width;
	}
}

class Ellipse extends Shape {
	constructor(height: number, width: number) {
		super(height, width);
		this.height = height;
		this.width = width;
		this.area = (((Math.PI * width) / 2) * height) / 2;
	}

	getArea(height: number, width: number) {
		this.area = (((Math.PI * width) / 2) * height) / 2;
	}
}

class Triangle extends Shape {
	constructor(height: number, width: number) {
		super(height, width);
		this.height = height;
		this.width = width;
		this.area = (height * width) / 2;
	}

	getArea(height: number, width: number) {
		this.area = (height * width) / 2;
	}
}

const rectangle1 = new Rectangle(6, 6);
const rectangle2 = new Rectangle(5, 15);
const rectangle3 = new Rectangle(5, 5);

rectangle1.getArea(rectangle1.height, rectangle1.width);
rectangle2.getArea(rectangle2.height, rectangle2.width);
rectangle3.getArea(rectangle3.height, rectangle3.width);

const ellipse1 = new Ellipse(6, 6);
const ellipse2 = new Ellipse(5, 15);
const ellipse3 = new Ellipse(5, 5);

ellipse1.getArea(ellipse1.height, ellipse1.width);
ellipse2.getArea(ellipse2.height, ellipse2.width);
ellipse3.getArea(ellipse3.height, ellipse3.width);

const triangle1 = new Triangle(6, 6);
const triangle2 = new Triangle(5, 15);
const triangle3 = new Triangle(5, 5);

triangle1.getArea(triangle1.height, triangle1.width);
triangle2.getArea(triangle2.height, triangle2.width);
triangle3.getArea(triangle3.height, triangle3.width);

console.log(rectangle1); // Rectangle { height: 6, width: 6, area: 36 }
console.log(rectangle2); // Rectangle { height: 5, width: 15, area: 75 }
console.log(rectangle3); // Rectangle { height: 5, width: 5, area: 25 }

console.log(ellipse1); // Ellipse { height: 6, width: 6, area: 28.274333882308138 }
console.log(ellipse2); // Ellipse { height: 5, width: 15, area: 58.90486225480862 }
console.log(ellipse3); // Ellipse { height: 5, width: 5, area: 19.634954084936208 }

console.log(triangle1); // Triangle { height: 6, width: 6, area: 18 }
console.log(triangle2); // Triangle { height: 5, width: 15, area: 37.5 }
console.log(triangle3); // Triangle { height: 5, width: 5, area: 12.5 }
