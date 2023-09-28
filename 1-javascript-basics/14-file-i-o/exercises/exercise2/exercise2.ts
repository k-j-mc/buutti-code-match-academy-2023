import * as fs from "fs";

const allForecasts = {
	day: "monday",
	temperature: 20,
	cloudy: true,
	sunny: false,
	windy: false,
};

const writeInitialData = JSON.stringify(allForecasts);

fs.writeFileSync("forecast_data.json", writeInitialData);

const readData = fs.readFileSync("forecast_data.json", "utf8");
const allForecastsJSON = JSON.parse(readData);

console.log(allForecastsJSON);

allForecasts.temperature = 300;

const writeEditedData = JSON.stringify(allForecasts);

fs.writeFileSync("forecast_data.json", writeEditedData);

const readEditedData = fs.readFileSync("forecast_data.json", "utf8");
const allForecastsEditedJSON = JSON.parse(readEditedData);

console.log(allForecastsEditedJSON);
