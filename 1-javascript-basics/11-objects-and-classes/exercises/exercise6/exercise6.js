var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
        this.area = height * width;
    }
    Rectangle.prototype.getArea = function (height, width) {
        this.area = height * width;
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(6, 6);
var rectangle2 = new Rectangle(5, 15);
var rectangle3 = new Rectangle(5, 5);
rectangle1.getArea(rectangle1.height, rectangle1.width);
rectangle2.getArea(rectangle2.height, rectangle2.width);
rectangle2.getArea(rectangle3.height, rectangle3.width);
console.log(rectangle1); // { height: 6, width: 6, area: 36 }
console.log(rectangle2); // Rectangle { height: 5, width: 15, area: 75 }
console.log(rectangle3); // Rectangle { height: 5, width: 15, area: 75 }
