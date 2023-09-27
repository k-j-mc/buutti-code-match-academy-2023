var x = 150;
var y = 200;
var commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
var commandHandlers = {
    N: function () { return y++; },
    E: function () { return x++; },
    S: function () { return y--; },
    W: function () { return x--; },
};
for (var i = 0; i < commandList.length; i++) {
    var command = commandList[i];
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
console.log("Robot final coordinates:");
console.log("X: " + x);
console.log("Y: " + y);
