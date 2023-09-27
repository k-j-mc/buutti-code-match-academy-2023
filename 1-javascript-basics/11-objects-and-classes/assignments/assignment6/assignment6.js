var Robot = /** @class */ (function () {
    function Robot() {
        this.x = 0;
        this.y = 0;
        this.commandList = [];
    }
    Robot.prototype.handleCommandList = function (commandList) {
        var _this = this;
        this.commandList = commandList.split("");
        var commandHandlers = {
            N: function () { return _this.y++; },
            E: function () { return _this.x++; },
            S: function () { return _this.y--; },
            W: function () { return _this.x--; },
        };
        for (var i = 0; i < this.commandList.length; i++) {
            var command = this.commandList[i];
            if (command === "C") {
                continue;
            }
            else if (command === "B") {
                break;
            }
            else {
                var adjustXY = commandHandlers[command];
                adjustXY();
            }
        }
    };
    return Robot;
}());
var robot1 = new Robot();
robot1.handleCommandList("NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE");
console.log(robot1); //   x: 8, y: 7, ...
var robot2 = new Robot();
robot2.handleCommandList("NNCCCEEBEEEEEEEEEEEEEE");
console.log(robot2); //  x: 2, y: 2, ...
