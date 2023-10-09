const App = () => {
	const names = ["Ari", "Jari", "Kari", "Sari", "Mari", "Sakari", "Jouko"];

	const namesList = names.map((name) => (
		<li className="listItem" key={name}>
			{name}
		</li>
	));

	return (
		<div>
			<ul>{namesList}</ul>
		</div>
	);
};

export default App;
