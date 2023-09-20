const tree = { x: 6, y: 7, hitpoints: 30 };
const rock = { x: 3, y: 11, hitpoints: 90 };
const damage = 15;

{
	let treeHitpointsLeft;
	let rockHitpointsLeft;

	const hitpoints = rock.hitpoints;
	rockHitpointsLeft = hitpoints - damage;

	console.log("Rock hitpoints left: " + rockHitpointsLeft);

	{
		const hitpoints = tree.hitpoints;
		treeHitpointsLeft = hitpoints - damage;

		console.log("Tree hitpoints left: " + treeHitpointsLeft);
	}
}
