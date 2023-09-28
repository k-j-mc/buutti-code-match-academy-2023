let timeFunction = function (arg: number, func: any) {
	setTimeout(() => {
		func();
	}, arg);
};

new Promise((resolve, reject) => {
	let it_works: boolean = false;
	timeFunction(1000, () => {
		console.log("first");
		timeFunction(1000, () => {
			console.log("second");
			timeFunction(1000, () => {
				console.log("third");
				timeFunction(1000, () => {
					console.log("it works...");
					it_works = true;

					if (it_works) {
						resolve("resolved!");
					} else {
						reject("rejected!");
					}
				});
			});
		});
	});
})
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	});
