import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";

import movieService from "./services/movies";
import reviewService from "./services/reviews";
import watchListService from "./services/watchList";

import { userInfo, signOutUser } from "./reducers/userReducer";
import {
	getFeaturedMovies,
	getTopRatedMovies,
	getActionMovies,
	getHorrorMovies,
	getMovies,
	fetchInitialData,
} from "./reducers/movieReducer";

import NavigationBar from "./components/NavigationBar/NavigationBar";

import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MovieVideoPage from "./pages/MovieVideoPage";

import SignInPage from "./pages/Auth/SignInPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

import ErrorPage from "./pages/ErrorPage";

import LoaderLargeCircle from "./components/Loaders/LoaderLargeCircle";

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

	const {
		loadingAllMovies,
		loadingTopRatedMovies,
		topRatedMovies,
		allMovies,
	} = useAppSelector((state) => state.movies);

	useEffect(() => {
		if (!loadingAllMovies && allMovies.length === 0) {
			dispatch(fetchInitialData());
		}
	}, [allMovies]);

	const { user } = useAppSelector((state) => state.user);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("signedInMLiBUser");

		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);

			movieService.setToken(user.token);
			reviewService.setToken(user.token);
			watchListService.setToken(user.token);
		} else {
			dispatch(signOutUser());
		}
	}, [user]);

	console.log(allMovies);

	return (
		<div className="main">
			<NavigationBar />
			{!loadingTopRatedMovies && allMovies.length > 0 ? (
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route
						path="/sign-in"
						element={!user ? <SignInPage /> : <Navigate to="/" />}
					/>
					<Route
						path="/sign-up"
						element={!user ? <SignUpPage /> : <Navigate to="/" />}
					/>
					<Route
						path="/password-reset"
						element={
							!user ? <ForgotPasswordPage /> : <Navigate to="/" />
						}
					/>
					<Route
						path="/profile/:id"
						element={user ? <ProfilePage /> : <Navigate to="/" />}
					/>

					<Route
						path="/movie/:id"
						element={
							<MovieDetailPage
								popularityCeil={topRatedMovies[0].popularity}
							/>
						}
					/>

					<Route path="/video/:id" element={<MovieVideoPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			) : (
				<>
					<LoaderLargeCircle
						loading={loadingTopRatedMovies}
						styleName="loaderMain"
						size={200}
					/>
					<h3 className="headerPageInfoCenter">
						Fetching initial data...
					</h3>
				</>
			)}
		</div>
	);
};

export default App;
