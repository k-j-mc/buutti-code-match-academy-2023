const firstTriangle = { width: 7.0, length: 3.5 };
const secondTriangle = { width: 4.3, length: 6.4 };
const thirdTriangle = { width: 5.5, length: 5.0 };

const triangles = [firstTriangle, secondTriangle, thirdTriangle];

const triangleArea = (triangle, name) => {
	let area = (triangle.width * triangle.length) / 2.0;

	triangle.area = area;
	triangle.name = name;

	return area;
};

const largestTriangle = () => {
	const result = triangles.sort((a, b) => b.area - a.area);

	return `The ${result[0].name} triangle has the biggest area.`;
};

console.log("Area of first triangle: " + triangleArea(firstTriangle, "First"));
console.log(
	"Area of second triangle: " + triangleArea(secondTriangle, "Second")
);
console.log("Area of third triangle: " + triangleArea(thirdTriangle, "Third"));
console.log(largestTriangle());
