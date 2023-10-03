const jokes = [
	{
		id: 513,
		joke: "Ransu Karvakuono does not code in cycles, he codes in strikes.",
		categories: ["nerdy"],
	},
	{
		id: 423,
		joke: "Ransu Karvakuono had to stop washing his clothes in the ocean. The tsunamis were killing people.",
		categories: [],
	},
	{
		id: 490,
		joke: "Ransu Karvakuono doesn't need to use AJAX because pages are too afraid to postback anyways.",
		categories: ["nerdy"],
	},
	{
		id: 545,
		joke: "Ransu Karvakuono's brain waves are suspected to be harmful to cell phones.",
		categories: [],
	},
	{
		id: 461,
		joke: "Ransu Karvakuono finished World of Warcraft.",
		categories: ["nerdy"],
	},
	{
		id: 60,
		joke: "When Ransu Karvakuono calls 1-900 numbers, he doesn't get charged. He holds up the phone and money falls out.",
		categories: [],
	},
	{
		id: 501,
		joke: "Ransu Karvakuono's programs never exit, they terminate.",
		categories: ["nerdy"],
	},
	{
		id: 26,
		joke: "Ransu Karvakuono is the only human being to display the Heisenberg uncertainty principle - you can never know both exactly where and how quickly he will roundhouse-kick you in the face.",
		categories: ["nerdy"],
	},
	{
		id: 384,
		joke: "Ransu Karvakuono was the original sculptor of Mount Rushmore. He completed the entire project using only a bottle opener and a drywall trowel.",
		categories: [],
	},
	{
		id: 382,
		joke: "Ransu Karvakuono once participated in the running of the bulls. He walked.",
		categories: [],
	},
];

const elementGreeting = document.getElementById("jokeChange");

let text = `<h2>${jokes[1].joke}</h2>`;

let nerdyJokes = jokes.filter((joke) => {
	return joke.categories[0] === "nerdy" && joke;
});

function jokeChanger(event) {
	if (event === 0) {
		document.getElementById("jokeChange").innerHTML = `<h2>${
			jokes[Math.floor(Math.random() * jokes.length)].joke
		}</h2>`;
	} else if (event === 1) {
		document.getElementById("jokeChange").innerHTML = `<h2>${
			nerdyJokes[Math.floor(Math.random() * nerdyJokes.length)].joke
		}</h2>`;
	} else if (event === 2) {
		document.getElementById("jokeChange").innerHTML = `<ul>${jokes
			.map((joke) => `<li><h2>${joke.joke}</h2></li>`)
			.join("")}</ul>`;
	} else {
		document.getElementById(
			"jokeChange"
		).innerHTML = `<h2>DELETED: ${jokes[0].joke}</h2>`;
		jokes.shift();
	}
}

jokeChange.innerHTML = text;
