import "./App.css";

import { ICounter2 } from "./App";

interface ICounterArray {
	counter: ICounter2;
	handleCount: (counter: ICounter2) => void;
}

const Counter2 = ({ counter, handleCount }: ICounterArray) => {
	return (
		<>
			<button
				className="buttonCount"
				key={`button ${counter.id}`}
				onClick={() => handleCount(counter)}
			>
				<h5 className="buttonCountText">{counter.counter}</h5>
			</button>
		</>
	);
};

export default Counter2;
