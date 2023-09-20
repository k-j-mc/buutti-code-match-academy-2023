const person = {
	name: "Kristofer",
	age: 32,
	likesPineappleOnPizza: "Maybe",
};

console.log(person);

person.likesPineappleOnPizza = null;
person.someRandomValue = false;

console.log(person);

console.log(typeof person.name);
console.log(typeof person.age);
console.log(typeof person.likesPineappleOnPizza);
console.log(typeof person.someRandomValue);

/* 2.A  {
    objects: "are", 
    printed: "as", 
    the: "collection",
    of: "information",
    like: "so" 
} */

console.log(typeof person);
