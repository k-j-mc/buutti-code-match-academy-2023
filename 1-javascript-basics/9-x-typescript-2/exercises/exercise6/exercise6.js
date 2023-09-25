var isItSinking = function (data) {
    if (data.hullBreached) {
        console.log("Sinking");
        for (data.fillLevel; data.fillLevel < 100; data.fillLevel + 20) {
            data.fillLevel = data.fillLevel + 20;
            if (data.fillLevel >= 100) {
                data.sunk = true;
                console.log("Sunk");
            }
            console.log(data);
        }
    }
    else {
        console.log("Not sinking");
    }
    return data;
};
var boat = {
    hullBreached: true,
    fillLevel: 20,
    sunk: false,
};
console.log(isItSinking(boat));
