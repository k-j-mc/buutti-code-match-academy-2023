interface Data {
	hullBreached: boolean;
	fillLevel: number;
	sunk: boolean;
}

const isItSinking = (data: Data) => {
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
	} else {
		console.log("Not sinking");
	}

	return data;
};

const boat = {
	hullBreached: true,
	fillLevel: 20,
	sunk: false,
};

console.log(isItSinking(boat));
