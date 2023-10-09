const Year = ({ year }) => <h2>It is the year {year}</h2>;

const HelloWorld = ({ name, year }) => (
	<>
		<h1>Hello {name}</h1>
		<Year year={year} />
	</>
);

const App = () => {
	const year = new Date().getFullYear();

	return (
		<div>
			<HelloWorld name={"Barry"} year={year} />
			<HelloWorld name={"Ed"} year={year} />
			<HelloWorld name={"Mona"} year={year} />
		</div>
	);
};
export default App;
