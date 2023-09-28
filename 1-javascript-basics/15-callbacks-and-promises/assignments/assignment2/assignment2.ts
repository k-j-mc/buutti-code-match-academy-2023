// A.

const waitFor = async (milliseconds: number) => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			if (milliseconds) {
				resolve("ok");
			}
		}, milliseconds);
	});
};

// B.

const countSeconds = async () => {
	for (let i = 0; i <= 10; i++) {
		await waitFor(1000).then((response) => console.log(i));
	}
};

countSeconds();
