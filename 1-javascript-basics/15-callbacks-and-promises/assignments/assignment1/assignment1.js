// A.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var numberArray = [];
var sumNumber = 0;
var sum = function (limit) {
    for (var i = 0; i <= limit; i++) {
        numberArray.push(i);
    }
    numberArray.map(function (number) {
        sumNumber += number;
    });
    return sumNumber;
};
// console.log(sum(10)); // prints 55 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
// B.
var numberArrayPromise = [];
var sumNumberPromise = 0;
var sumPromise = function (limit) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i <= limit; i++) {
            numberArrayPromise.push(i);
        }
        numberArrayPromise.map(function (number) {
            sumNumberPromise += number;
        });
        if (sumNumberPromise > limit) {
            resolve(sumNumberPromise);
        }
        else {
            reject("Error");
        }
    })
        .then(function (value) {
        console.log(value);
    })
        .catch(function (error) {
        console.log(error);
    });
};
// sumPromise(50000); // prints 1250025000 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10...............)
// C.
var numberArrayPromiseTimeOut = [];
var sumNumberPromiseTimeOut = 0;
var timeFunction = function (arg, func) {
    setTimeout(function () {
        func();
    }, arg);
};
var sumPromiseTimeOut = function (limit) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i <= limit; i++) {
            numberArrayPromiseTimeOut.push(i);
        }
        numberArrayPromiseTimeOut.map(function (number) {
            sumNumberPromiseTimeOut += number;
        });
        if (sumNumberPromiseTimeOut > limit) {
            timeFunction(2000, function () {
                resolve(sumNumberPromiseTimeOut);
            });
        }
        else {
            reject("Error");
        }
    })
        .then(function (value) {
        console.log(value);
    })
        .catch(function (error) {
        console.log(error);
    });
};
// sumPromiseTimeOut(50000); // prints 1250025000 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10...............)
// D.
var numberArrayDelayedCalculation = [];
var sumNumberDelayedCalculation = 0;
var timeFunction2 = function (arg, func) {
    setTimeout(function () {
        func();
    }, arg);
};
var createDelayedCalculation = function (limit, milliseconds) {
    return new Promise(function (resolve, reject) {
        timeFunction2(milliseconds, function () {
            numberArrayDelayedCalculation = [];
            sumNumberDelayedCalculation = 0;
            for (var i = 0; i <= limit; i++) {
                numberArrayDelayedCalculation.push(i);
            }
            numberArrayDelayedCalculation.map(function (number) {
                sumNumberDelayedCalculation += number;
            });
            if (sumNumberDelayedCalculation > limit) {
                resolve(sumNumberDelayedCalculation);
            }
            else {
                reject("Error");
            }
        });
    });
};
var countingPromises = function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                // Prints 200000010000000 after a delay of 2 seconds
                _b = (_a = console).log;
                return [4 /*yield*/, createDelayedCalculation(20000000, 2000).then(function (result) { return result; })];
            case 1:
                // Prints 200000010000000 after a delay of 2 seconds
                _b.apply(_a, [_e.sent()]);
                // Prints 1250025000 after a delay of 0.5 seconds
                _d = (_c = console).log;
                return [4 /*yield*/, createDelayedCalculation(50000, 500).then(function (result) { return result; })];
            case 2:
                // Prints 1250025000 after a delay of 0.5 seconds
                _d.apply(_c, [_e.sent()]);
                return [2 /*return*/];
        }
    });
}); };
countingPromises();
// // Prints 200000010000000 after a delay of 2 seconds
// createDelayedCalculation(20000000, 2000).then((result) => console.log(result));
// // Prints 1250025000 after a delay of 0.5 seconds
// createDelayedCalculation(50000, 500).then((result) => console.log(result));
// E.
