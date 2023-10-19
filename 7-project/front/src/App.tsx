import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./hooks/redux-hooks";

import movieService from "./services/movies";

import { userInfo } from "./reducers/userReducer";
import {
	getFeaturedMovies,
	getTopRatedMovies,
	getActionMovies,
	getHorrorMovies,
	getMovies,
} from "./reducers/movieReducer";

import NavigationBar from "./components/NavigationBar/NavigationBar";

import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MovieVideoPage from "./pages/MovieVideoPage";

import SignInPage from "./pages/Auth/SignInPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

import ErrorPage from "./pages/ErrorPage";

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getFeaturedMovies());
		dispatch(getTopRatedMovies());
		dispatch(getActionMovies());
		dispatch(getHorrorMovies());
		dispatch(getMovies());
		dispatch(userInfo());
	}, [dispatch]);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("signedInMLiBUser");

		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);

			movieService.setToken(user.token);
		}
	}, []);

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
				<Route path="/video/:id" element={<MovieVideoPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default App;
