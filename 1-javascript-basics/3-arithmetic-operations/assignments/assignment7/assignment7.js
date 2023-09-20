let totalPieces = 100;

let numberOfPeople = 6;

let remainder = totalPieces % numberOfPeople;

let piecesForEach = (totalPieces - remainder) / numberOfPeople;

console.log(
	"Candy for each: " +
		piecesForEach +
		". Remaining pieces for purchaser: " +
		remainder
);
