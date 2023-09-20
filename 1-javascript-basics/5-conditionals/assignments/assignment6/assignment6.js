let balance = 99;
let isActive = true;
let checkBalance = false;

if (checkBalance) {
	if (isActive && balance > 0) {
		console.log(`Balance: $${balance}`);
	} else if (!isActive) {
		console.log("Your account is inactive!");
	} else if (balance === 0) {
		console.log("Your account is empty");
	} else if (balance < 0) {
		console.log("Your balance is negative");
	}
} else {
	console.log("Have a nice day!");
}
