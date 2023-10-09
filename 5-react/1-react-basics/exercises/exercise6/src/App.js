import Hello from "./Hello";

const App = () => {
	const year = new Date().getFullYear();

	return (
		<div>
			<Hello name={"Barry"} year={year} />
			<Hello name={"Ed"} year={year} />
			<Hello name={"Mona"} year={year} />
		</div>
	);
};
export default App;
