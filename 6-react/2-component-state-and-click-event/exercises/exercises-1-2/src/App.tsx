import { useState } from "react";

import Family from "./Family";

const App = () => {
	const people = [
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 35 },
		{ name: "Charlie", age: 40 },
		{ name: "Donna", age: 45 },
	];

	return (
		<div className="App">
			<h1>App:</h1>
			<Family people={people} />
		</div>
	);
};

export default App;
