import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieById, getMovieVideos } from "../reducers/movieReducer";
import { Grid } from "@mui/material";

import { IVideo } from "../models/movie-models";

import Video from "../components/Video/Video";

import HorizontalVideoCards from "../components/MediaContainers/HorizontalVideoCards";
import LoaderLargeCircle from "../components/Loaders/LoaderLargeCircle";

const MovieVideoPage = () => {
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

	const handleClick = (movie: IVideo) => {
		console.log(movie);
	};

	return (
		<div className="videoPage">
			<Grid
				container
				spacing={1}
				style={{ padding: "2vh 10vw 1vh 10vw" }}
			>
				<Grid item xs={12}>
					{!loadingVideo && movie.length > 0 && video.length > 0 ? (
						<>
							<h2 className="headerPageInfo">
								{movie[0].title}: {video[0].name}
							</h2>
							<Video video={video[0].key} />
							{video.length > 1 && (
								<>
									<h3 className="headerPageInfo">
										More from {movie[0].title}:
									</h3>

									<HorizontalVideoCards
										videos={video}
										handleClick={handleClick}
									/>
								</>
							)}
						</>
					) : (
						<LoaderLargeCircle
							loading={loadingVideo}
							styleName="loaderMain"
							size={200}
						/>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default MovieVideoPage;
