const ages = [20, 35, 27, 44, 24, 32];

console.log(ages);

let sum = 0;

const averageAge = () => {
	for (let index = 0; index < ages.length; index++) {
		sum += ages[index];
	}

	return `Average rounded down age: ${Math.floor(sum / ages.length)}`;
};

console.log(averageAge());
