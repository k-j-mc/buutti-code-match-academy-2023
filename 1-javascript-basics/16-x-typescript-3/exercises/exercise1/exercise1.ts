import * as fs from "fs";

interface bookInterface {
	author: string;
	title: string;
	readingStatus: boolean;
	id: number;
}

const library: bookInterface[] = [
	{
		author: "David Wallace",
		title: "Infinite Jest",
		readingStatus: false,
		id: 1,
	},
	{
		author: "Douglas Hofstadter",
		title: "Gödel, Escher, Bach",
		readingStatus: true,
		id: 2,
	},
	{
		author: "Harper Lee",
		title: "To Kill A Mockingbird",
		readingStatus: false,
		id: 3,
	},
];

function getBook(id: number) {
	console.log(library[id].title);
}

function printBookData(id: number) {
	console.log(library[id].title);
}

function printReadingStatus(author: string, title: string) {
	const result = library
		.filter(
			(book) =>
				book.author.toLowerCase().includes(author.toLowerCase()) &&
				book.title.toLowerCase().includes(title.toLowerCase())
		)
		.map((book) => book.readingStatus);

	console.log(result.toString());
}

function addNewBook(author: string, title: string) {
	library.push({
		author: author,
		title: title,
		readingStatus: false,
		id: library.length + 1,
	});

	console.log(library[library.length - 1]);
}

function readBook(id: number) {
	library[id].readingStatus = !library[id].readingStatus;

	console.log(library[id]);
}

function saveToJSON() {
	fs.writeFileSync("library.json", JSON.stringify(library), "utf8");
}

function loadFromJSON() {
	const loadJSON = fs.readFileSync("library.json", "utf8");
	const library = JSON.parse(loadJSON);
	console.log(library);
}

getBook(0); // Infinite Jest
printBookData(1); //Gödel, Escher, Bach
printReadingStatus("Harper", "BIRD"); // false
addNewBook("someone", "something"); // { author: 'someone', title: 'something', readingStatus: false, id: 4 }
readBook(1); //{ author: 'Douglas Hofstadter', title: 'Gödel, Escher, Bach', readingStatus: false, id: 2 }
saveToJSON();
loadFromJSON(); /*

[
  {
    author: 'David Wallace',
    title: 'Infinite Jest',
    readingStatus: false,
    id: 1
  },
  {
    author: 'Douglas Hofstadter',
    title: 'Gödel, Escher, Bach',
    readingStatus: false,
    id: 2
  },
  {
    author: 'Harper Lee',
    title: 'To Kill A Mockingbird',
    readingStatus: false,
    id: 3
  },
  {
    author: 'someone',
    title: 'something',
    readingStatus: false,
    id: 4
  }
]

*/
