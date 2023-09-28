"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var allForecasts = {
    day: "monday",
    temperature: 20,
    cloudy: true,
    sunny: false,
    windy: false,
};
var writeInitialData = JSON.stringify(allForecasts);
fs.writeFileSync("forecast_data.json", writeInitialData);
var readData = fs.readFileSync("forecast_data.json", "utf8");
var allForecastsJSON = JSON.parse(readData);
console.log(allForecastsJSON);
allForecasts.temperature = 300;
var writeEditedData = JSON.stringify(allForecasts);
fs.writeFileSync("forecast_data.json", writeEditedData);
var readEditedData = fs.readFileSync("forecast_data.json", "utf8");
var allForecastsEditedJSON = JSON.parse(readEditedData);
console.log(allForecastsEditedJSON);
