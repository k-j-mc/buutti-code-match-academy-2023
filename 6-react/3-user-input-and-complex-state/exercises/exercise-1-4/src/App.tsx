import { useState } from "react";

type TCounter = {
	number: number;
	string: string;
};

const App = () => {
	// Exercise1
	const [userInput, setUserInput] = useState<string>("");

	// Exercise2 & 3
	const [userInput2, setUserInput2] = useState<string>("");
	const [userString, setUserString] = useState<string>("");

	const handleChange = (text: string) => {
		setUserInput2(text);
	};

	const onSubmit = (event: any) => {
		event.preventDefault();
		setUserString(userInput2);
		setUserInput2("");
	};

	// Exercise4
	const [counter, setCounter] = useState<TCounter>({ number: 0, string: "" });

	return (
		<div>
			<h1>Exercise 1</h1>
			<p>{userInput}</p>
			<input onChange={({ target }) => setUserInput(target.value)} />

			<h1>Exercise 2 & 3</h1>
			<h3>Your text: {userString}</h3>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={userInput2}
					onChange={({ target: { value } }) => handleChange(value)}
				/>
				<input type="submit" />
			</form>

			<h1>Exercise 4</h1>
			<div>
				<input
					value={counter.string}
					onChange={({ target }) =>
						setCounter({ ...counter, string: target.value })
					}
					type="text"
				/>
				<button
					onClick={() =>
						setCounter({ string: "", number: ++counter.number })
					}
				>
					{counter.number}
				</button>
			</div>
		</div>
	);
};

export default App;
