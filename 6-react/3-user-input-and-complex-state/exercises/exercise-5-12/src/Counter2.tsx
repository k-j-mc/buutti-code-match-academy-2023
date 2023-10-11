import { ICounter2 } from "./App";

interface ICounterArray {
	counter: ICounter2;
	handleCount2: (counter: ICounter2) => void;
}

const Counter2 = ({ counter, handleCount2 }: ICounterArray) => {
	return (
		<div>
			<button
				key={`button ${counter.id}`}
				onClick={() => handleCount2(counter)}
			>
				{counter.counter}
			</button>
		</div>
	);
};

export default Counter2;
