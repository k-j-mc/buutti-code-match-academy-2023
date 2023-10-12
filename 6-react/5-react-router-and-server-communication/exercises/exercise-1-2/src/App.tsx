import { Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Links from "./Pages/Links";

import Error from "./Pages/Error";

const App = () => {
	return (
		<div>
			<Link to="/">
				<p>Home</p>
			</Link>
			<Link to="/about">
				<p>About</p>
			</Link>
			<Link to="/links">
				<p>Links</p>
			</Link>
			<Link to="/I-DONT-GO-ANYWHERE-USEFUL!">
				<p>Error</p>
			</Link>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/links" element={<Links />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
