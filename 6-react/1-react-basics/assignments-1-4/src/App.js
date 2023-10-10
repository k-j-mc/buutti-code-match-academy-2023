import "bootstrap/dist/css/bootstrap.min.css";

import Assignment1 from "./Assignments/Assignment1";
import Assignment2 from "./Assignments/Assignment2";
import Assignment3 from "./Assignments/Assignment3";
import Assignment4 from "./Assignments/Assignment4";

import R2D2 from "./images/r2d2.jpeg";

const App = () => {
	const userName = "Kristofer";
	const userAge = 32;

	const planetList = [
		{ name: "Hoth", climate: "Ice" },
		{ name: "Tattooine", climate: "Desert" },
		{ name: "Alderaan", climate: "Temperate" },
		{ name: "Mustafar", climate: "Volcanic" },
	];

	return (
		<div>
			<h1>Assignment 1</h1>
			<h5>(Simple props)</h5>
			<Assignment1 userName={userName} userAge={userAge} />

			<h1>Assignment 2</h1>
			<h5>(HTML and CSS in React)</h5>
			<Assignment2 R2D2={R2D2} />

			<h1>Assignment 3</h1>
			<h5>(Generating lists)</h5>
			<Assignment3 planetList={planetList} />

			<h1>Assignment 4</h1>
			<h5>(Extra: React and Bootstrap)</h5>
			<Assignment4 />
		</div>
	);
};
export default App;
