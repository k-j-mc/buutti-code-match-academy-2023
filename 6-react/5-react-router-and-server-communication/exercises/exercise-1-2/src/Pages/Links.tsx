import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
	return (
		<div>
			<p>
				Link to Google:{" "}
				<Link to="https://www.google.co.uk/">Google</Link>
			</p>
			<p>
				Link to Wikipedia:{" "}
				<Link to="https://www.wikipedia.org/">Wikipedia</Link>
			</p>
		</div>
	);
};

export default Links;
