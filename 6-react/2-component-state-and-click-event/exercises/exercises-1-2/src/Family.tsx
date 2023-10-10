import Person from "./Person";

export type TPeople = {
	people: IPeople[];
};

export type IPeople = {
	name: string;
	age: number;
};

const Family = ({ people }: TPeople) => {
	return (
		<div className="Family">
			<h3>Family members:</h3>
			{people.map((person: IPeople) => (
				<Person key={person.name} name={person.name} age={person.age} />
			))}
		</div>
	);
};

export default Family;
