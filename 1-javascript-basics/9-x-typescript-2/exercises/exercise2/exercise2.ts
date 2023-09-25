const grades: Array<number | string> = ["1", 2, 3, 4, 5, 66, "98", "900"];

const result = grades.forEach((obj) => {
	const number: number = Number(obj);

	if (number > 3) {
		console.log(obj);
	}
});
