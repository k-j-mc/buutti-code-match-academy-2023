var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    return Rectangle;
}());
var rectangle1 = new Rectangle(6, 6);
var rectangle2 = new Rectangle(5, 15);
console.log(rectangle1); // Rectangle { height: 6, width: 6 }
console.log(rectangle2); // Rectangle { height: 5, width: 15 }
