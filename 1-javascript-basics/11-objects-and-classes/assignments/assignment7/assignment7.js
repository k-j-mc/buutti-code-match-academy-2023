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
var Animal = /** @class */ (function () {
    function Animal(weight, cuteness) {
        this.weight = weight;
        this.cuteness = cuteness;
    }
    Animal.prototype.makeSound = function () {
        console.log("silence");
        return "silence";
    };
    return Animal;
}());
// A.
var animal = new Animal(6.5, 4.0);
animal.makeSound(); // prints "silence"
console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"
// B.
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(weight, cuteness) {
        var _this = _super.call(this, weight, cuteness) || this;
        _this.weight = weight;
        _this.cuteness = cuteness;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        console.log("meow");
        return "meow";
    };
    return Cat;
}(Animal));
var cat = new Cat(4.5, 3.0);
cat.makeSound(); // prints "meow"
console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"
// C.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(weight, cuteness, breed) {
        var _this = _super.call(this, weight, cuteness) || this;
        _this.weight = weight;
        _this.cuteness = cuteness;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        if (this.cuteness > 4) {
            console.log("awoo");
            return "awoo";
        }
        else {
            console.log("bark");
            return "bark";
        }
    };
    return Dog;
}(Animal));
var dog1 = new Dog(7.0, 4.5, "kleinspitz");
var dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark"
