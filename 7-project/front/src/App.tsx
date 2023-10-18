import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";

import { getMovies, getMovieById } from "./reducers/movieReducer";

import { MovieInterface } from "./models/movie-models";

import NavigationBar from "./components/NavigationBar/NavigationBar";

import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

import SignInPage from "./pages/Auth/SignInPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

import ErrorPage from "./pages/ErrorPage";

const App = () => {
	const dispatch = useAppDispatch();
	// const movies = useAppSelector((state) => state.movies);
	const user = useAppSelector((state) => state.user);

	// console.log(movies);
	// console.log(user);

	useEffect(() => {
		dispatch(getMovies());
		// dispatch(getMovieById("HELLO!"));
	}, [dispatch]);

	return (
		<div className="main">
			<NavigationBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route
					path="/password-reset"
					element={<ForgotPasswordPage />}
				/>
				<Route path="/movie/:id" element={<MovieDetailPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default App;
