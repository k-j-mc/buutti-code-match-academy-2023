const computers = [
	{
		name: "Computer 1",
		completionInMinutes: 42,
		energyConsumption: 600,
	},
	{
		name: "Computer 2",
		completionInMinutes: 57,
		energyConsumption: 480,
	},
];

computers.map((obj) => {
	obj.totalPower = obj.energyConsumption * obj.completionInMinutes;
});

console.log(computers);

console.log(
	computers[0].totalPower < computers[1].totalPower
		? "Computer 1 is more power efficient"
		: "Computer 2 is more power efficient"
);
