import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./hooks/redux-hooks";
import { fetchMovies, fetchParticularMovie } from "./store/movieActions";

import NavigationBar from "./components/NavigationBar/NavigationBar";

import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

import SignInPage from "./pages/Auth/SignInPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

import ErrorPage from "./pages/ErrorPage";

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
		dispatch(fetchParticularMovie("svlkndvlskdnvsjndvlksndlvioiiid"));
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
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default App;
