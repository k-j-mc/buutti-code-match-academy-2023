// A.

class WeatherEvent {
	timestamp: string;
	information: string;

	constructor(timestamp: string) {
		this.timestamp = timestamp;
		this.information = "";
	}

	getInformation() {
		this.information = "information";
	}

	print() {
		console.log(`${this.timestamp} ${this.information}`);
		return `${this.timestamp} ${this.information}`;
	}
}

// const weather1 = new WeatherEvent(new Date().toString());

// console.log(weather1);

// B.

class TemperatureChangeEvent extends WeatherEvent {
	temperature: number;

	constructor(timestamp: string, temperature: number) {
		super(timestamp);
		this.timestamp = timestamp;
		this.temperature = temperature;
	}

	getInformation() {
		this.information = `Temperature: ${this.temperature}°C`;

		return this.information;
	}

	print() {
		this.getInformation();

		return this.information;
	}
}

// const weather2 = new TemperatureChangeEvent(weather1.timestamp, 28);

// console.log(weather2.print()); // Wed Sep 27 2023 12:36:38 GMT+0300 (Eastern European Summer Time) Temperature: 28°C

// C.

class HumidityChangeEvent extends WeatherEvent {
	humidity: number;

	constructor(timestamp: string, humidity: number) {
		super(timestamp);
		this.humidity = humidity;
	}

	getInformation() {
		this.information = `Humidity: ${this.humidity}%`;

		return this.information;
	}

	print() {
		this.getInformation();

		return this.information;
	}
}

// D.

class WindStrengthChangeEvent extends WeatherEvent {
	windStrength: number;

	constructor(timestamp: string, windStrength: number) {
		super(timestamp);
		this.windStrength = windStrength;
	}

	getInformation() {
		this.information = `Wind strength: ${this.windStrength} M/S`;

		return this.information;
	}

	print() {
		this.getInformation();

		return this.information;
	}
}

const weatherEvents: any[] = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.forEach((weatherEvent) => console.log(weatherEvent.print()));
// Does print:
// 2022-11-29 03:00 Temperature: -6.4°C
// 2022-11-29 04:00 Humidity: 95%
// 2022-11-30 13:00 Wind strength: 2.2 M/S
