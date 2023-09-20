let hoursPlayed = 100;
let score = 5;
let price = 50;

if (
	(score >= 4 && price === 0) ||
	(score === 4 && hoursPlayed >= price * 4) ||
	(score === 5 && hoursPlayed >= price * 2)
) {
	console.log("Game is worth it");
} else {
	console.log("Game is not worth it");
}
