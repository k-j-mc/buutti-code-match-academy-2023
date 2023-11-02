import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieById, getMovieVideos } from "../reducers/movieReducer";
import { getMovieReviews } from "../reducers/reviewReducer";

import MovieDetails from "../components/MovieDetails/PageHeading";
import AdditionalDetails from "../components/MovieDetails/AdditionalDetails";
import MovieCast from "../components/MovieDetails/MovieCast";
import Reviews from "../components/MovieDetails/Reviews/Reviews";

import MovieVideoPage from "./MovieVideoPage";

import LoaderLargeCircle from "../components/Loaders/LoaderLargeCircle";

type TPopularity = {
	popularityCeil: number;
};

const MovieDetailPage = ({ popularityCeil }: TPopularity) => {
	const videoRef = useRef<HTMLInputElement | null>(null);
	const reviewRef = useRef<HTMLInputElement | null>(null);

	const routePath = useLocation();

	const dispatch = useAppDispatch();

	const { video, movie, loadingMovie } = useAppSelector(
		(state) => state.movies
	);

	const { movieReviews } = useAppSelector((state) => state.reviews);

	const locationName = window.location.pathname.substring(7);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [routePath]);

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

	const handleReviewScroll = () => {
		reviewRef.current?.scrollIntoView({
			block: "center",
			behavior: "smooth",
		});
	};

	const handleVideoScroll = () => {
		videoRef.current?.scrollIntoView({
			block: "center",
			behavior: "smooth",
		});
	};

	return (
		<div>
			{!loadingMovie &&
			movie.length > 0 &&
			movie.length > 0 &&
			locationName === movie[0].id ? (
				<>
					<div className="detailsPage">
						<MovieDetails
							movie={movie[0]}
							popularityCeil={popularityCeil}
							handleReviewScroll={handleReviewScroll}
							handleVideoScroll={handleVideoScroll}
						/>
					</div>
					<div className="additionalDetails">
						<AdditionalDetails />
					</div>
					<div className="cast">
						<MovieCast />
					</div>

					{movie[0].video_count > 0 && (
						<div ref={videoRef}>
							<MovieVideoPage />
						</div>
					)}

					<div className="reviews" ref={reviewRef}>
						<Reviews />
					</div>
				</>
			) : (
				<LoaderLargeCircle
					loading={loadingMovie}
					styleName="loaderMain"
					size={200}
				/>
			)}
		</div>
	);
};

export default MovieDetailPage;
