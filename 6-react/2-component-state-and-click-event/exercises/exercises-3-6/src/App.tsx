import { useState, useEffect } from "react";

import CounterButtons from "./CounterButtons";

const App = () => {
	const [value1, setValue1] = useState<number>(2);
	const [value2, setValue2] = useState<number>(1);
	const [value3, setValue3] = useState<number>(4);
	const [totalValue, setTotalValue] = useState<number>(
		value1 + value2 + value3
	);

	const [visibility, setVisibility] = useState<boolean>(true);

	useEffect(() => {
		setTotalValue(value1 + value2 + value3);
	}, [value1, value2, value3]);

	const valueProps = {
		value1,
		setValue1,
		value2,
		setValue2,
		value3,
		setValue3,
		totalValue,
		visibility,
		setVisibility,
	};

	return (
		<div>
			<CounterButtons {...valueProps} />
		</div>
	);
};

export default App;
