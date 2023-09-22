const array = ["the", "quick", "brown", "fox"];

array[2] = "gray";

array.push("over", "lazy", "dog");
array.unshift("pangram:");
array.splice(5, 0, "jumps");
array.splice(7, 0, "the");

array.shift();
array.splice(-5, 5);
array.splice(2, 1);

console.log(array);
