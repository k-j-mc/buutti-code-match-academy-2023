import Year from "./Year";

const Hello = ({ name, year }) => (
	<>
		<h1>Hello {name}</h1>
		<Year year={year} />
	</>
);

export default Hello;
