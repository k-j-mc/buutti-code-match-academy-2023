type valueProps = {
	value1: number;
	setValue1: (value1: number) => void;
	value2: number;
	setValue2: (value2: number) => void;
	value3: number;
	setValue3: (value3: number) => void;
	totalValue: number;
	visibility: boolean;
	setVisibility: (visibility: boolean) => void;
};

type instructions = {
	value: string;
};

const CounterButtons = (props: valueProps) => {
	const {
		value1,
		setValue1,
		value2,
		setValue2,
		value3,
		setValue3,
		totalValue,
		visibility,
		setVisibility,
	} = props;

	const changeValue = ({ value }: instructions) => {
		if (value === "value1") {
			setValue1(value1 + 1);
		} else if (value === "value2") {
			setValue2(value2 + 1);
		} else if (value === "value3") {
			setValue3(value3 + 1);
		}
	};

	return (
		<div>
			<button onClick={() => setVisibility(!visibility)}>
				{visibility === true ? "Hide buttons" : "Show buttons"}
			</button>
			{visibility && (
				<div>
					<div>
						<button
							onClick={() => changeValue({ value: "value1" })}
						>
							{value1}
						</button>
					</div>

					<div>
						<button
							onClick={() => changeValue({ value: "value2" })}
						>
							{value2}
						</button>
					</div>

					<div>
						<button
							onClick={() => changeValue({ value: "value3" })}
						>
							{value3}
						</button>
					</div>
				</div>
			)}
			<p>{totalValue}</p>
		</div>
	);
};

export default CounterButtons;
