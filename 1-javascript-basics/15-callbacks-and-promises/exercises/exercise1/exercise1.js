var timeFunction = function (arg, func) {
    setTimeout(function () {
        func();
    }, arg);
};
timeFunction(1000, function () {
    console.log("first");
    timeFunction(1000, function () {
        console.log("second");
        timeFunction(1000, function () {
            console.log("third");
            timeFunction(1000, function () {
                console.log("final");
            });
        });
    });
});
