import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CounterObjsID from "./CounterObjsID";

import CounterButtonsArray from "./CounterButtonsArray";
import CounterButtonsObjects from "./CounterButtonsObjects";
import Counter from "./Counter";
import Counter2 from "./Counter2";

export interface ICounter {
	id: number;
	counter: number;
}

export interface ICounter2 {
	id: string;
	counter: number;
}

const App = () => {
	// Exercise 5 & 6
	const [counterArray, setCounterArray] = useState<number[]>([0, 0, 0, 0]);

	// Exercise 7
	const [counterObjects, setCounterObjects] = useState<ICounter[]>([
		{ id: 0, counter: 0 },
		{ id: 1, counter: 0 },
		{ id: 2, counter: 0 },
		{ id: 3, counter: 0 },
	]);

	// Exercise 8 & 9
	const [counterObjects2, setCounterObjects2] = useState<ICounter[]>([
		{ id: 0, counter: 0 },
		{ id: 1, counter: 0 },
		{ id: 2, counter: 0 },
		{ id: 3, counter: 0 },
	]);

	const handleCount = (item: ICounter) => {
		setCounterObjects2(
			counterObjects2.map((counter) =>
				item.id === counter.id
					? { ...counter, counter: ++counter.counter }
					: counter
			)
		);
	};

	// Exercise 10, 11 & 12
	const [buttonDelete, setButtonDelete] = useState<boolean>(false);
	const [minActive, setMinActive] = useState<boolean>(false);
	const [counterObjects3, setCounterObjects3] =
		useState<ICounter2[]>(CounterObjsID);
	const [counterObjsTempArray, setCounterObjsTempArray] =
		useState<ICounter2[]>(counterObjects3);

	const handleCount2 = (item: ICounter2) => {
		if (buttonDelete === false) {
			setCounterObjects3(
				counterObjects3.map((counter) =>
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
		setCounterObjects3([...counterObjects3, { id: uuidv4(), counter: 0 }]);
	};

	const handleButtonStatus = () => {
		setButtonDelete(true);
	};

	const handleDeleteButton = (item: ICounter2) => {
		setCounterObjects3(
			counterObjects3.filter((counter) => counter.id !== item.id)
		);
		setButtonDelete(false);
	};

	const handleValues = (status: boolean) => {
		setMinActive(!minActive);

		setCounterObjsTempArray(counterObjects3);

		if (status) {
			const minValue = counterObjects3.reduce((prev, curr) =>
				prev.counter < curr.counter ? prev : curr
			);

			setCounterObjects3(
				counterObjects3.filter(
					(counter) => counter.counter === minValue.counter
				)
			);
		} else {
			setCounterObjects3(counterObjsTempArray);
		}
	};

	return (
		<div>
			<h1>Exercise 5 & 6</h1>
			<CounterButtonsArray
				counterArray={counterArray}
				setCounterArray={setCounterArray}
			/>
			<h1>Exercise 7</h1>
			<CounterButtonsObjects
				counterObjects={counterObjects}
				setCounterObjects={setCounterObjects}
			/>
			<h1>Exercise 8 & 9</h1>
			{counterObjects2.map((counter) => (
				<Counter
					key={counter.id}
					counter={counter}
					handleCount={handleCount}
				/>
			))}
			{counterObjects2.reduce(
				(value, initialValue) => value + initialValue.counter,
				0
			)}

			<h1>Exercise 10, 11 & 12</h1>

			{counterObjects3.map((counter) => (
				<Counter2
					key={counter.id}
					counter={counter}
					handleCount2={handleCount2}
				/>
			))}
			{counterObjects3.reduce(
				(value, initialValue) => value + initialValue.counter,
				0
			)}

			<div />

			<button onClick={() => handleNewButton()}>New Button</button>
			<button onClick={() => handleButtonStatus()}>
				{buttonDelete === true ? "Select one..." : "Delete Button"}
			</button>
			<div />

			<input type="checkbox" onClick={() => handleValues(!minActive)} />
			<p>
				{minActive === true
					? "Show all values"
					: "Filter minimum values"}
			</p>
		</div>
	);
};

export default App;
