const autot = [
	{
		rekisteri: "abc-123",
		merkki: "Toyota",
		vuosimalli: 1998,
	},
	{
		rekisteri: "xyz-999",
		merkki: "Mercedes Benz",
		vuosimalli: 2011,
	},
	{
		rekisteri: "les-0",
		merkki: "Tesla",
		vuosimalli: 2022,
	},
];

const toJson = JSON.stringify(autot);

console.log(toJson);
