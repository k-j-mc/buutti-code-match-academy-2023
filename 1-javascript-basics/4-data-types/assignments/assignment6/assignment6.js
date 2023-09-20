const bookCollection = [
	{
		name: "Dune",
		pageCount: 412,
		read: true,
	},
	{
		name: "Eye of the World",
		pageCount: 782,
		read: false,
	},
];

console.log(bookCollection);

bookCollection.map((book) => {
	console.log(book);

	book.read = !book.read;
});

console.log(bookCollection);
