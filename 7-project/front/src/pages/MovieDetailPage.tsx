import { useEffect, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieById, getMovieVideos } from "../reducers/movieReducer";
import { getMovieReviews } from "../reducers/reviewReducer";
import {
	Box,
	Card,
	CardMedia,
	Chip,
	CircularProgress,
	Grid,
	Paper,
	Rating,
	Typography,
} from "@mui/material";

import MovieDetails from "../components/MovieDetails/PageHeading";
import MovieCast from "../components/MovieDetails/MovieCast";
import Reviews from "../components/MovieDetails/Reviews/Reviews";

import LoaderLargeCircle from "../components/Loaders/LoaderLargeCircle";

import countryData from "../tools/countryData";

import "semantic-ui-flag/flag.min.css";
import Icons from "../components/Icons";

type TPopularity = {
	popularityCeil: number;
};

const MovieDetailPage = ({ popularityCeil }: TPopularity) => {
	const dispatch = useAppDispatch();

	const { video, movie, loadingVideo, topRatedMovies } = useAppSelector(
		(state) => state.movies
	);

	const { movieReviews, loadingMovieReviews } = useAppSelector(
		(state) => state.reviews
	);

	const locationName = window.location.pathname.substring(7);

	useEffect(() => {
		if (movie.length <= 0) {
			dispatch(getMovieById(locationName));
		}
		if (video.length <= 0) {
			dispatch(getMovieVideos(locationName));
		}
		if (movieReviews.length <= 0) {
			dispatch(getMovieReviews(locationName));
		}
	}, []);

	console.log(movie);

	return (
		<div>
			{!loadingVideo && movie.length > 0 && movie.length > 0 ? (
				<>
					<div className="detailsPage">
						<MovieDetails
							movie={movie[0]}
							popularityCeil={popularityCeil}
						/>
					</div>
					<div className="cast">
						<MovieCast />
					</div>
					<div className="reviews">
						<Reviews />
					</div>
				</>
			) : (
				<LoaderLargeCircle
					loading={loadingVideo}
					styleName="loaderMain"
					size={200}
				/>
			)}
		</div>
	);
};

export default MovieDetailPage;
