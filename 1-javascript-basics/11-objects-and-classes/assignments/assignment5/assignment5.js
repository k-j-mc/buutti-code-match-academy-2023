var Room = /** @class */ (function () {
    function Room(width, height) {
        this.width = width;
        this.height = height;
        this.area = width * height;
        this.furniture = [];
    }
    Room.prototype.getArea = function () {
        return this.area;
    };
    Room.prototype.addFurniture = function (furniture) {
        this.furniture.push(furniture);
    };
    return Room;
}());
// A.
var room = new Room(4.5, 6.0);
console.log(room); // Room { width: 4.5, height: 6 }
// B.
var area = room.getArea();
console.log(area); // prints 27
// C.
room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log(room); // prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
