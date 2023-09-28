let timeFunction = function (arg: number, func: any) {
	setTimeout(() => {
		func();
	}, arg);
};

timeFunction(1000, () => {
	console.log("first");
	timeFunction(1000, () => {
		console.log("second");
		timeFunction(1000, () => {
			console.log("third");
			timeFunction(1000, () => {
				console.log("final");
			});
		});
	});
});
