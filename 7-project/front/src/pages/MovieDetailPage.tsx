import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieById, getMovieVideos } from "../reducers/movieReducer";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";

import { IVideo } from "../models/movie-models";

import Video from "../components/Video/Video";

import HorizontalVideoCards from "../components/MediaContainers/HorizontalVideoCards";
import LoaderLargeCircle from "../components/Loaders/LoaderLargeCircle";

const MovieDetailPage = () => {
	const dispatch = useAppDispatch();

	const { video, movie, loadingVideo } = useAppSelector(
		(state) => state.movies
	);

	const locationName = window.location.pathname.substring(7);

	useEffect(() => {
		if (movie.length <= 0) {
			dispatch(getMovieById(locationName));
		}
		if (video.length <= 0) {
			dispatch(getMovieVideos(locationName));
		}
	}, []);

	console.log(movie);
	console.log(video);

	return (
		<>
			{!loadingVideo && movie.length > 0 && movie.length > 0 ? (
				<Grid container spacing={3} style={{ height: "100vh" }}>
					<Grid item xs={0.5} md={1} lg={3} />
					<Grid item xs={11} md={6} lg={6}>
						<h2 className="headerPageInfo">{movie[0].title}</h2>

						<Card
							sx={{
								width: "200px",
								marginRight: "auto",
								mt: 4,
								mr: 4,
							}}
						>
							<CardActionArea>
								<CardMedia
									component="img"
									loading="lazy"
									src={`http://localhost:5000/images/posters${movie[0].poster}`}
									alt={movie[0].title}
								/>
							</CardActionArea>
						</Card>
					</Grid>

					<Grid item xs={0.5} md={1} lg={3} />
				</Grid>
			) : (
				<LoaderLargeCircle
					loading={loadingVideo}
					styleName="loaderMain"
					size={200}
				/>
			)}
		</>
	);
};

export default MovieDetailPage;
