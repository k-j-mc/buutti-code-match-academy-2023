// 1.
const arrayFunction = (array) => {
	array[0].message = "Goodbye";

	return array;
};

const array = [{ message: "Hello" }, { message: "World" }];

console.log(array);

arrayFunction(array);

console.log(array);

// 2.
const objectFunction = (object) => {
	object.lie = false;
};

const object = {
	fact: true,
};

console.log(object);

objectFunction(object);

console.log(object);
