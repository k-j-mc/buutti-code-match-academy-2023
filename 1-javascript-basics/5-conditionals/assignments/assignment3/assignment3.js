const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

let month = "";
let days = 0;
let error = null;

readline.question("Which month? (Number input only 1-12):", (input) => {
	switch (input) {
		case "1":
			month = "January";
			days = 31;
			break;
		case "2":
			month = "February";
			days = 28;
			break;
		case "3":
			month = "March";
			days = 31;
			break;
		case "4":
			month = "April";
			days = 30;
			break;
		case "5":
			month = "May";
			days = 31;
			break;
		case "6":
			month = "June";
			days = 30;
			break;
		case "7":
			month = "July";
			days = 31;
			break;
		case "8":
			month = "August";
			days = 31;
			break;
		case "9":
			month = "September";
			days = 3;
			break;
		case "10":
			month = "October";
			days = 31;
			break;
		case "11":
			month = "November";
			days = 30;
			break;
		case "12":
			month = "December";
			days = 31;
			break;
		default:
			error = "Input error, try again";
			break;
	}

	if (error) {
		console.log(error);
	} else {
		console.log(`${month} has ${days} days in total`);
	}

	readline.close();
});
