let number = 5;
const increase = 4;
let limit = 11;

number = number + increase;

/* Print number if it is 
bigger 
than limit (11) */
if (number > limit) {
	console.log(number);
}

number = number + increase;

// Check if it is bigger after it has been increased again
if (number > limit) {
	console.log(number);
}
