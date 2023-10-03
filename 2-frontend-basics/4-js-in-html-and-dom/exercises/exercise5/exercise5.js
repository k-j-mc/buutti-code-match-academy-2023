const tiles = document.querySelectorAll("#colorTile");

tiles.forEach((tile) => {
	tile.addEventListener("mouseenter", () => {
		tile.style.backgroundColor = "rgb(242, 248, 66)";
	});

	tile.addEventListener("mouseleave", () => {
		tile.style.backgroundColor = "";
	});
});
