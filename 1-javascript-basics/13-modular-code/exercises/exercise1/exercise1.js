const firstname = "My firstname";
const lastname = "My lastname";

const sayHi = (user) => {
	console.log(`Hello, ${user}!`);
};

export { firstname as fname, lastname as lname, sayHi as hi };
