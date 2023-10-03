let count = 0;

let newName = "";

const userName = [
	"Bill",
	"Bob",
	"Jane",
	"Martha",
	"Herbert",
	"Wendell",
	"Alice",
];

const elementGreeting = document.getElementById("printUser");
const elementText = document.getElementById("textInput");

elementGreeting.addEventListener("click", onSubmit);
elementText.addEventListener("input", changeName);

let text = `<p>Welcome! ${
	userName[Math.floor(Math.random() * userName.length)]
}!</p>`;

function load() {
	if (count < userName.length - 1) {
		count++;
	} else {
		count = 0;
	}
}

window.onload = load;

function changeName(event) {
	newName = event;
}

function onSubmit() {
	document.getElementById(
		"printUser"
	).innerHTML = `<p>Welcome! ${newName}!</p>`;
}

printUser.innerHTML = text;
