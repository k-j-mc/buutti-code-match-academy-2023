const array = ["the", "quick", "brown", "fox"];

array[2] = "gray";

array.push("over", "lazy", "dog");
array.unshift("pangram:");
array.splice(5, 0, "jump");
array.splice(7, 0, "the");

console.log(array[1]);
console.log(array[2]);

console.log(array);
