import { useState, useEffect } from "react";

import names from "./data/names";
import buttonGroup from "./data/buttonGroup";
import winningLines from "./data/winningLines";

import Assignment1 from "./Assignment1";
import Assignment2 from "./Assignment2";
import Assignment3 from "./Assignment3";

export interface IGroup {
	id: number;
	value: boolean;
}

export interface IGroup2 {
	id: number;
	value: string;
	name: string;
}

const App = () => {
	// Assignment1
	const [visibility, setVisibility] = useState<boolean>(true);

	// Assignment2
	const [buttonGroupVis, setButtonGroupVis] = useState<IGroup[]>(buttonGroup);

	const hideButton = (item: IGroup) => {
		let tempArray = buttonGroupVis;
		tempArray[item.id].value = item.value;
		setButtonGroupVis([...tempArray]);
	};

	// Assignment3
	const [nameArray, setNameArray] = useState<IGroup2[]>([]);

	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		const tempArray: IGroup2[] = [];
		let tempId = 0;
		names.forEach((item) =>
			tempArray.push({
				name: item,
				value: "rgb(245, 103, 103)",
				id: tempId++,
			})
		);
		setNameArray(tempArray);
	}, []);

	type Grid = { [key: number]: "X" | null };

	const [grid, setGrid] = useState<Grid>({
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
		7: null,
		8: null,
		9: null,
		10: null,
		11: null,
		12: null,
		13: null,
		14: null,
		15: null,
		16: null,
		17: null,
		18: null,
		19: null,
		20: null,
		21: null,
		22: null,
		23: null,
		24: null,
		25: null,
	});

	const checkScore = (grid: Grid) => {
		const values = winningLines.map((comboKeys) =>
			comboKeys.map((key) => grid[key])
		);

		const winner = values.find((values) => values.every((v) => v === "X"));

		if (!!winner) {
			setMessage("BINGO!");
		}
	};

	const changeColor = (item: IGroup2) => {
		let tempArray = nameArray;
		tempArray[item.id].value = item.value;
		setNameArray([...tempArray]);

		let tempGrid = grid;

		tempGrid[item.id + 1] = "X";
		setGrid({ ...tempGrid });

		checkScore(grid);
	};

	return (
		<div>
			<h1>Assignment 1</h1>
			<Assignment1
				visibility={visibility}
				setVisibility={setVisibility}
			/>
			<h1>Assignment 2</h1>
			{buttonGroupVis.map((button) => (
				<Assignment2
					key={button.id}
					button={button}
					hideButton={hideButton}
				/>
			))}

			<h1>Assignment 3</h1>
			<div className="wrapper">
				{nameArray.map((name) => (
					<Assignment3
						key={name.id}
						name={name}
						changeColor={changeColor}
					/>
				))}
			</div>
			{message.length > 0 && <h1>{message}</h1>}
		</div>
	);
};

export default App;
