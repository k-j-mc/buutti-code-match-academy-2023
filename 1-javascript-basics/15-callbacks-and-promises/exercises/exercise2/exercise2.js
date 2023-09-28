var timeFunction = function (arg, func) {
    setTimeout(function () {
        func();
    }, arg);
};
new Promise(function (resolve, reject) {
    var it_works = false;
    timeFunction(1000, function () {
        console.log("first");
        timeFunction(1000, function () {
            console.log("second");
            timeFunction(1000, function () {
                console.log("third");
                timeFunction(1000, function () {
                    console.log("it works...");
                    it_works = true;
                    if (it_works) {
                        resolve("resolved!");
                    }
                    else {
                        reject("rejected!");
                    }
                });
            });
        });
    });
})
    .then(function (value) {
    console.log(value);
})
    .catch(function (error) {
    console.log(error);
});
