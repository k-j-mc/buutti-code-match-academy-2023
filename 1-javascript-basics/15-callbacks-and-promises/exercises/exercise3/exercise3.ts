const getValue = function () {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res({ value1: Math.random(), value2: Math.random() });
		}, Math.random() * 1500);
	});
};

getValue().then((value: any) => {
	console.log(`Value 1A is ${value.value1} and value 2A is ${value.value2}`);
});

let delay = (time: number, someStr: any) =>
	new Promise((res, rej) => {
		setTimeout(() => res(someStr), time);
	});

let getValue2 = async () => {
	console.log(
		await delay(
			1000,
			`Value 1B is ${Math.random()} and value 2B is ${Math.random()}`
		)
	);
};

getValue2();
