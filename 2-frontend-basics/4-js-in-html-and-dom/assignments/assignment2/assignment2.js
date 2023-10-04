let bookName = "";
let pageCount = 0;

const data = [
	{ name: "Dune", pages: 412 },
	{ name: "The Eye of the World", pages: 782 },
];

let list = document.getElementById("bookList");

let ul = "";

function updateValues() {
	ul = `<ul class="list-group list-group-flush p-1">${data
		.map(
			(data) =>
				`<li class="list-group-item">${data.name} (${data.pages} pages)</li>`
		)
		.join("")}</ul>`;

	list.innerHTML = ul;
}

updateValues();

function changeBookName(event) {
	bookName = event;
}

function changePageCount(event) {
	pageCount = event;
}

function onSubmit(e) {
	e.preventDefault();

	const newBook = {
		name: bookName,
		pages: pageCount,
	};

	data.push(newBook);
	updateValues();

	bookName = "";
	pageCount = 0;

	document.getElementById("bookForm").reset();
}
