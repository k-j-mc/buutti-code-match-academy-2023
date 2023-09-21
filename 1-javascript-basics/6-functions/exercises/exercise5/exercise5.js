const tree = { x: 6, y: 7, hitpoints: 30 };
const rock = { x: 3, y: 11, hitpoints: 90 };

let treeHitpointsLeft;
let rockHitpointsLeft;

const damageTree = (damage) => {
	const hitpoints = tree.hitpoints;

	treeHitpointsLeft = hitpoints - damage;

	console.log("Tree hitpoints left: " + treeHitpointsLeft);
};

const damageRock = (damage) => {
	const hitpoints = rock.hitpoints;

	rockHitpointsLeft = hitpoints - damage;

	console.log("Rock hitpoints left: " + rockHitpointsLeft);
};

const damage = (target, damagePoints) => {
	if (target === "tree") {
		damageTree(damagePoints);
	} else {
		damageRock(damagePoints);
	}
};

damage("tree", 25);

damage("rock", 5);
