class Animal {
	weight: number;
	cuteness: number;

	constructor(weight: number, cuteness: number) {
		this.weight = weight;
		this.cuteness = cuteness;
	}

	makeSound() {
		console.log("silence");

		return "silence";
	}
}

// A.

const animal = new Animal(6.5, 4.0);
animal.makeSound(); // prints "silence"
console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"

// B.

class Cat extends Animal {
	constructor(weight: number, cuteness: number) {
		super(weight, cuteness);
		this.weight = weight;
		this.cuteness = cuteness;
	}
	makeSound() {
		console.log("meow");

		return "meow";
	}
}

const cat = new Cat(4.5, 3.0);
cat.makeSound(); // prints "meow"
console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"

// C.

class Dog extends Animal {
	breed: string;

	constructor(weight: number, cuteness: number, breed: string) {
		super(weight, cuteness);
		this.weight = weight;
		this.cuteness = cuteness;
		this.breed = breed;
	}

	makeSound() {
		if (this.cuteness > 4) {
			console.log("awoo");

			return "awoo";
		} else {
			console.log("bark");

			return "bark";
		}
	}
}

const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark"
