let a = 3;
let b = 2;

// 1.
console.log("Sum = " + (a + b));
console.log("Difference = " + (a < b ? b - a : a - b));
console.log("Division = " + (a < b ? b / a : a / b));
console.log("Product = " + a * b);

let c = 4;

// 2.
console.log(a + b * c);
// = (b * c) + a = 11

console.log((a + b) * c);
// = 20

console.log(a + b * c);
//  = 11
// a + (b * c) multiplies b & c and adds this to a
