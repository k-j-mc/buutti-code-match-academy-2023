const year = 1600;

if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
	console.log("Is a leap year");
} else {
	console.log("Is not a leap year");
}
