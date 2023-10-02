"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var library = [
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
function getBook(id) {
    console.log(library[id].title);
}
function printBookData(id) {
    console.log(library[id].title);
}
function printReadingStatus(author, title) {
    var result = library
        .filter(function (book) {
        return book.author.toLowerCase().includes(author.toLowerCase()) &&
            book.title.toLowerCase().includes(title.toLowerCase());
    })
        .map(function (book) { return book.readingStatus; });
    console.log(result.toString());
}
function addNewBook(author, title) {
    library.push({
        author: author,
        title: title,
        readingStatus: false,
        id: library.length + 1,
    });
    console.log(library[library.length - 1]);
}
function readBook(id) {
    library[id].readingStatus = !library[id].readingStatus;
    console.log(library[id]);
}
function saveToJSON() {
    fs.writeFileSync("library.json", JSON.stringify(library), "utf8");
}
function loadFromJSON() {
    var loadJSON = fs.readFileSync("library.json", "utf8");
    var library = JSON.parse(loadJSON);
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
