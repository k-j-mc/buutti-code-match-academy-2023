let number1 = 3;
let number2 = 15;
// 2. Not assignming a value to a variable throws a SyntaxError if followed by a ;
// ReferenceError is thrown if without ; as there is nothing to access

console.log(number1 + number2);

number1 = 4;
number2 = 2;

console.log(number1 + number2);

// 3. constant values cannot be re-assigned, TypeError thrown
