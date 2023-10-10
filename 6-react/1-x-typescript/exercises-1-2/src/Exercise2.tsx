type valueProps = {
	value1: number;
	setValue1: (value1: number) => void;
	value2: number;
	setValue2: (value2: number) => void;
};

type instructions = {
	type: string;
	value: string;
};

const Exercise2 = (props: valueProps) => {
	const { value1, setValue1, value2, setValue2 } = props;

	const changeValue = ({ type, value }: instructions) => {
		if (value === "value1") {
			if (type === "increment") {
				setValue1(value1 + 1);
			} else {
				setValue1(value1 - 1);
			}
		} else {
			if (type === "increment") {
				setValue2(value2 + 1);
			} else {
				setValue2(value2 - 1);
			}
		}
	};

	return (
		<div>
			<h3>{value1}</h3>
			<button
				onClick={() =>
					changeValue({ type: "increment", value: "value1" })
				}
			>
				+
			</button>
			<button
				disabled={value1 <= 0 ? true : false}
				onClick={() =>
					changeValue({ type: "decrement", value: "value1" })
				}
			>
				-
			</button>
			<h3>{value2}</h3>
			<button
				onClick={() =>
					changeValue({ type: "increment", value: "value2" })
				}
			>
				+
			</button>
			<button
				disabled={value2 <= 0 ? true : false}
				onClick={() =>
					changeValue({ type: "decrement", value: "value2" })
				}
			>
				-
			</button>
		</div>
	);
};

export default Exercise2;
