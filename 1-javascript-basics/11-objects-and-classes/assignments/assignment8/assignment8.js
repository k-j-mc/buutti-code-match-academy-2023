// A.
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
var WeatherEvent = /** @class */ (function () {
    function WeatherEvent(timestamp) {
        this.timestamp = timestamp;
        this.information = "";
    }
    WeatherEvent.prototype.getInformation = function () {
        this.information = "information";
    };
    WeatherEvent.prototype.print = function () {
        console.log("".concat(this.timestamp, " ").concat(this.information));
        return "".concat(this.timestamp, " ").concat(this.information);
    };
    return WeatherEvent;
}());
// const weather1 = new WeatherEvent(new Date().toString());
// console.log(weather1);
// B.
var TemperatureChangeEvent = /** @class */ (function (_super) {
    __extends(TemperatureChangeEvent, _super);
    function TemperatureChangeEvent(timestamp, temperature) {
        var _this = _super.call(this, timestamp) || this;
        _this.timestamp = timestamp;
        _this.temperature = temperature;
        return _this;
    }
    TemperatureChangeEvent.prototype.getInformation = function () {
        this.information = "Temperature: ".concat(this.temperature, "\u00B0C");
        return this.information;
    };
    TemperatureChangeEvent.prototype.print = function () {
        this.getInformation();
        return this.information;
    };
    return TemperatureChangeEvent;
}(WeatherEvent));
// const weather2 = new TemperatureChangeEvent(weather1.timestamp, 28);
// console.log(weather2.print()); // Wed Sep 27 2023 12:36:38 GMT+0300 (Eastern European Summer Time) Temperature: 28°C
// C.
var HumidityChangeEvent = /** @class */ (function (_super) {
    __extends(HumidityChangeEvent, _super);
    function HumidityChangeEvent(timestamp, humidity) {
        var _this = _super.call(this, timestamp) || this;
        _this.humidity = humidity;
        return _this;
    }
    HumidityChangeEvent.prototype.getInformation = function () {
        this.information = "Humidity: ".concat(this.humidity, "%");
        return this.information;
    };
    HumidityChangeEvent.prototype.print = function () {
        this.getInformation();
        return this.information;
    };
    return HumidityChangeEvent;
}(WeatherEvent));
// D.
var WindStrengthChangeEvent = /** @class */ (function (_super) {
    __extends(WindStrengthChangeEvent, _super);
    function WindStrengthChangeEvent(timestamp, windStrength) {
        var _this = _super.call(this, timestamp) || this;
        _this.windStrength = windStrength;
        return _this;
    }
    WindStrengthChangeEvent.prototype.getInformation = function () {
        this.information = "Wind strength: ".concat(this.windStrength, " M/S");
        return this.information;
    };
    WindStrengthChangeEvent.prototype.print = function () {
        this.getInformation();
        return this.information;
    };
    return WindStrengthChangeEvent;
}(WeatherEvent));
var weatherEvents = [];
weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));
weatherEvents.forEach(function (weatherEvent) { return console.log(weatherEvent.print()); });
// Does print:
// 2022-11-29 03:00 Temperature: -6.4°C
// 2022-11-29 04:00 Humidity: 95%
// 2022-11-30 13:00 Wind strength: 2.2 M/S
