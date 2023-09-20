let player1 = 50;
let player2 = 200;

let difference = 0;
let taxRate = 0.9;

console.log("Player1 score: " + player1 + ". Player 2 score: " + player2);

function calculateDifference() {
	if (player1 > player2) {
		difference = player1 - player2;
	} else {
		difference = player2 - player1;
	}
	console.log("Difference between player scores: " + difference);
}

calculateDifference();

player1 = player1 ** taxRate;
player2 = player2 ** taxRate;

console.log(
	"Both players taxed. Player1 score: " +
		player1 +
		". Player 2 score: " +
		player2
);

calculateDifference();
