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
var Robot = /** @class */ (function () {
    function Robot(x, y) {
        this.x = x;
        this.y = y;
    }
    Robot.prototype.handleMessage = function (message) {
        if (message === "moveNorth") {
            this.y++;
        }
        else if (message == "moveSouth") {
            this.y--;
        }
    };
    return Robot;
}());
var FlexibleRobot = /** @class */ (function (_super) {
    __extends(FlexibleRobot, _super);
    function FlexibleRobot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlexibleRobot.prototype.handleMessage = function (message) {
        if (message === "moveEast") {
            this.x++;
        }
        else if (message == "moveWest") {
            this.x--;
        }
        else if (message === "moveNE") {
            this.x++;
            this.y++;
        }
        else if (message == "moveNW") {
            this.x++;
            this.y++;
        }
        else {
            _super.prototype.handleMessage.call(this, message);
        }
    };
    return FlexibleRobot;
}(Robot));
var move = new Robot(40, 40);
move.handleMessage("moveNorth");
move.handleMessage("moveNorth");
move.handleMessage("moveNorth");
var move2 = new FlexibleRobot(0, 0);
// move2.handleMessage("moveNorth");
// move2.handleMessage("moveNorth");
move2.handleMessage("moveNE");
move2.handleMessage("moveNE");
move2.handleMessage("moveEast");
move2.handleMessage("moveEast");
// move2.handleMessage("moveNorth");
// move2.handleMessage("moveNorth");
console.log(move2);
