import { ICounter } from "./App";

interface ICounterArray {
	counter: ICounter;
	handleCount: (counter: ICounter) => void;
}

const Counter = ({ counter, handleCount }: ICounterArray) => {
	return (
		<div>
			<button
				key={`button ${counter.id}`}
				onClick={() => handleCount(counter)}
			>
				{counter.counter}
			</button>
		</div>
	);
};

export default Counter;
