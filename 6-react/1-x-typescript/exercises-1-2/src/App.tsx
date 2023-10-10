import { useState } from "react";

import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";

const App = () => {
	const [value1, setValue1] = useState<number>(0);
	const [value2, setValue2] = useState<number>(0);

	const valueProps = {
		value1,
		setValue1,
		value2,
		setValue2,
	};

	return (
		<div>
			<Exercise1 />
			<Exercise2 {...valueProps} />
		</div>
	);
};

export default App;
