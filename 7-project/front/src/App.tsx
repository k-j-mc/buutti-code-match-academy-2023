import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { fetchMovies, fetchParticularMovie } from "./store/movieActions";

import PNGLogo from "./images/MLiB.png";

const App = () => {
	const dispatch = useAppDispatch();
	const allMovies = useAppSelector((state) => state.movie.allMovies);
	const particularMovie = useAppSelector((state) => state.movie.movie);

	useEffect(() => {
		dispatch(fetchMovies());
		dispatch(fetchParticularMovie("svlkndvlskdnvsjndvlksndlvioiiid"));
	}, []);

	console.log(allMovies);
	console.log(particularMovie);

	return (
		<div>
			<img src={PNGLogo} style={{ width: "80px" }} />
		</div>
	);
};

export default App;
