const name1 = "Phillip";
const name2 = "Maria";
const name3 = "Joe";

let nameArray = [name1, name2, name3];

nameArray.sort((a, b) => {
	return b.length - a.length;
});

console.log(nameArray);
