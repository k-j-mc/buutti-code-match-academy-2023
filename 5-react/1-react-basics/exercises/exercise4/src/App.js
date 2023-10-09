const Year = () => <h2>It is the year {new Date().getFullYear()}</h2>;

const HelloWorld = ({ name }) => (
	<>
		<h1>Hello {name}</h1>
		<Year />
	</>
);

const App = () => (
	<div>
		<HelloWorld name={"Barry"} />
		<HelloWorld name={"Ed"} />
		<HelloWorld name={"Mona"} />
	</div>
);
export default App;
