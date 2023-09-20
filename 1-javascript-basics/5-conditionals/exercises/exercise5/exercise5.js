// A.

const playerCount = 4;

if (playerCount >= 4) {
	console.log("The Game of Hearts can be played");
}

// B.

const isStressed = false;
const hasIceCream = false;

if (!isStressed || hasIceCream) {
	console.log("Mark is happy");
}

// C.

const sunIsShining = true;
const isRaining = false;
const temperature = 800;

if (sunIsShining && !isRaining && temperature >= 20) {
	console.log("It is a beach day");
}

// D.

let arinIsHappy = false;
const friends = ["Suzy"];
const isTuesday = true;

if (
	friends.includes("Suzy" || "Dan") &&
	!friends.includes("Suzy" && "Dan") &&
	isTuesday
) {
	arinIsHappy = true;
	console.log("Is Arin happy?:");
	console.log(arinIsHappy);
}
