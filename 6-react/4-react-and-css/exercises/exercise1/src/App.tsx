import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CounterObjsID from "./CounterObjsID";

import Counter from "./Counter";

import "./App.css";

export interface ICounter {
	id: number;
	counter: number;
}

export interface ICounter2 {
	id: string;
	counter: number;
}

const App = () => {
	const [buttonDelete, setButtonDelete] = useState<boolean>(false);
	const [minActive, setMinActive] = useState<boolean>(false);

	const [counterObjects, setCounterObjects] =
		useState<ICounter2[]>(CounterObjsID);

	const [counterObjsTempArray, setCounterObjsTempArray] =
		useState<ICounter2[]>(counterObjects);

	const handleCount = (item: ICounter2) => {
		if (buttonDelete === false) {
			setCounterObjects(
				counterObjects.map((counter) =>
					item.id === counter.id
						? { ...counter, counter: ++counter.counter }
						: counter
				)
			);
		} else {
			handleDeleteButton(item);
		}
	};

	const handleNewButton = () => {
		setCounterObjects([...counterObjects, { id: uuidv4(), counter: 0 }]);
	};

	const handleButtonStatus = () => {
		setButtonDelete(true);
	};

	const handleDeleteButton = (item: ICounter2) => {
		setCounterObjects(
			counterObjects.filter((counter) => counter.id !== item.id)
		);
		setButtonDelete(false);
	};

	const handleValues = (status: boolean) => {
		setMinActive(!minActive);

		setCounterObjsTempArray(counterObjects);

		if (status) {
			const minValue = counterObjects.reduce((prev, curr) =>
				prev.counter < curr.counter ? prev : curr
			);

			setCounterObjects(
				counterObjects.filter(
					(counter) => counter.counter === minValue.counter
				)
			);
		} else {
			setCounterObjects(counterObjsTempArray);
		}
	};

	return (
		<div>
			<h1 className="title">Counter:</h1>
			<div className="sumContainer">
				<h5 className="buttonCountText">
					{counterObjects.reduce(
						(value, initialValue) => value + initialValue.counter,
						0
					)}
				</h5>
			</div>

			<div className="buttonCountContainer">
				{counterObjects.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						handleCount={handleCount}
					/>
				))}
			</div>

			<div />

			<div className="buttonActionContainer">
				<button className="newButton" onClick={() => handleNewButton()}>
					New Button
				</button>
				<button
					className="deleteButton"
					onClick={() => handleButtonStatus()}
				>
					{buttonDelete === true ? "Select one..." : "Delete Button"}
				</button>
			</div>
			<div />

			<div className="filterActions">
				<input
					type="checkbox"
					onClick={() => handleValues(!minActive)}
				/>
				<p>
					{minActive === true
						? "Show all values"
						: "Filter minimum values"}
				</p>
			</div>
		</div>
	);
};

export default App;
