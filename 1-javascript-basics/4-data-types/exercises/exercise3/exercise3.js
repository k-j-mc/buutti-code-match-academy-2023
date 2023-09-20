let fruitArray = ["Apple", "Pear", "Orange"];

console.log(fruitArray.length);

fruitArray[1] = "Banana";

fruitArray.push("Lemon");

console.log(fruitArray);
// 2.A Push adds to end of the array

console.log(fruitArray.length);

fruitArray.pop();
console.log(fruitArray.length);
// 3.A Push removes the final element from the array

console.log(typeof fruitArray);

fruitArray.map((obj) => {
	console.log(obj);
});

// 4.A [ "Arrays", "are", "printed", "like", "so", "unless", "using forEach or map"]
// Console prints that the array is an object
