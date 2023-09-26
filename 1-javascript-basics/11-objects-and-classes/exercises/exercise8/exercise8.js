var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(height, width) {
        this.height = height;
        this.width = width;
        this.area = height * width;
    }
    Shape.prototype.getArea = function (height, width) {
        this.area = 0;
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(height, width) {
        var _this = _super.call(this, height, width) || this;
        _this.height = height;
        _this.width = width;
        _this.area = height * width;
        return _this;
    }
    Rectangle.prototype.getArea = function (height, width) {
        this.area = height * width;
    };
    return Rectangle;
}(Shape));
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(height, width) {
        var _this = _super.call(this, height, width) || this;
        _this.height = height;
        _this.width = width;
        _this.area = (((Math.PI * width) / 2) * height) / 2;
        return _this;
    }
    Ellipse.prototype.getArea = function (height, width) {
        this.area = (((Math.PI * width) / 2) * height) / 2;
    };
    return Ellipse;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(height, width) {
        var _this = _super.call(this, height, width) || this;
        _this.height = height;
        _this.width = width;
        _this.area = (height * width) / 2;
        return _this;
    }
    Triangle.prototype.getArea = function (height, width) {
        this.area = (height * width) / 2;
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(area) {
        var _this = _super.call(this, Math.sqrt(area), Math.sqrt(area)) || this;
        _this.area = area;
        return _this;
    }
    Square.prototype.getArea = function (area) {
        this.area = area;
    };
    return Square;
}(Rectangle));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(area) {
        var _this = _super.call(this, Math.sqrt(area * 2), Math.sqrt(area * 2)) || this;
        _this.area = area * 2;
        return _this;
    }
    Circle.prototype.getArea = function (area) {
        this.area = area * 2;
    };
    return Circle;
}(Ellipse));
var rectangle1 = new Rectangle(6, 6);
var rectangle2 = new Rectangle(5, 15);
var rectangle3 = new Rectangle(5, 5);
rectangle1.getArea(rectangle1.height, rectangle1.width);
rectangle2.getArea(rectangle2.height, rectangle2.width);
rectangle3.getArea(rectangle3.height, rectangle3.width);
var ellipse1 = new Ellipse(6, 6);
var ellipse2 = new Ellipse(5, 15);
var ellipse3 = new Ellipse(5, 5);
ellipse1.getArea(ellipse1.height, ellipse1.width);
ellipse2.getArea(ellipse2.height, ellipse2.width);
ellipse3.getArea(ellipse3.height, ellipse3.width);
var triangle1 = new Triangle(6, 6);
var triangle2 = new Triangle(5, 15);
var triangle3 = new Triangle(5, 5);
triangle1.getArea(triangle1.height, triangle1.width);
triangle2.getArea(triangle2.height, triangle2.width);
triangle3.getArea(triangle3.height, triangle3.width);
// console.log(rectangle1); // Rectangle { height: 6, width: 6, area: 36 }
// console.log(rectangle2); // Rectangle { height: 5, width: 15, area: 75 }
// console.log(rectangle3); // Rectangle { height: 5, width: 5, area: 25 }
// console.log(ellipse1); // Ellipse { height: 6, width: 6, area: 28.274333882308138 }
// console.log(ellipse2); // Ellipse { height: 5, width: 15, area: 58.90486225480862 }
// console.log(ellipse3); // Ellipse { height: 5, width: 5, area: 19.634954084936208 }
// console.log(triangle1); // Triangle { height: 6, width: 6, area: 18 }
// console.log(triangle2); // Triangle { height: 5, width: 15, area: 37.5 }
// console.log(triangle3); // Triangle { height: 5, width: 5, area: 12.5 }
var square1 = new Square(rectangle1.area);
var square2 = new Square(rectangle2.area);
var square3 = new Square(rectangle3.area);
square1.getArea(rectangle1.area);
square2.getArea(rectangle2.area);
square3.getArea(rectangle3.area);
console.log(square1); // Square { height: 6, width: 6, area: 36 }
console.log(square2); // Square { height: 8.660254037844387, width: 8.660254037844387, area: 75 }
console.log(square3); // Square { height: 5, width: 5, area: 25 }
var circle1 = new Circle(ellipse1.area);
var circle2 = new Circle(ellipse2.area);
var circle3 = new Circle(ellipse3.area);
circle1.getArea(ellipse1.area);
circle2.getArea(ellipse2.area);
circle3.getArea(ellipse3.area);
console.log(circle1); // Circle { height: 7.519884823893001, width: 7.519884823893001, area: 56.548667764616276 }
console.log(circle2); // Circle { height: 10.854018818374014, width: 10.854018818374014, area: 117.80972450961724 }
console.log(circle3); // Circle { height: 6.266570686577501, width: 6.266570686577501, area: 39.269908169872416 }
