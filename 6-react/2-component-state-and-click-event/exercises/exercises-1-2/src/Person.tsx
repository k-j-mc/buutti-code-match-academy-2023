import { IPeople } from "./Family";

const Person = ({ name, age }: IPeople) => {
	return (
		<div className="Person">
			<p>
				{name} is {age} years old!
			</p>
		</div>
	);
};

export default Person;
