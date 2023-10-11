import React from "react";

interface ICounterArray {
	counterArray: number[];
	setCounterArray: (counterArray: number[]) => void;
}

const CounterButtonsArray = ({
	counterArray,
	setCounterArray,
}: ICounterArray) => {
	const handleCounter = (index: number) => {
		let tempArray = counterArray;
		tempArray[index] = ++tempArray[index];

		setCounterArray([...tempArray]);
	};

	return (
		<div>
			{counterArray.map((counter, index) => (
				<button
					key={`button ${index}`}
					onClick={() => handleCounter(index)}
				>
					{counter}
				</button>
			))}
			{counterArray.reduce(
				(value, initialValue) => value + initialValue,
				0
			)}
		</div>
	);
};

export default CounterButtonsArray;
