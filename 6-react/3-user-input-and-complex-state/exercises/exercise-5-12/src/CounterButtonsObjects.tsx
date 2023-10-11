import { ICounter } from "./App";

interface ICounterArray {
	counterObjects: ICounter[];
	setCounterObjects: (counterObjects: ICounter[]) => void;
}

const CounterButtonsObjects = ({
	counterObjects,
	setCounterObjects,
}: ICounterArray) => {
	const handleCounter = (index: number) => {
		let tempArray = counterObjects;
		tempArray[index].counter = ++tempArray[index].counter;
		setCounterObjects([...tempArray]);
	};

	return (
		<div>
			{counterObjects.map((counter, index) => (
				<button
					key={`button ${counter.id}`}
					onClick={() => handleCounter(counter.id)}
				>
					{counter.counter}
				</button>
			))}
			{counterObjects.reduce(
				(value, initialValue) => value + initialValue.counter,
				0
			)}
		</div>
	);
};

export default CounterButtonsObjects;
