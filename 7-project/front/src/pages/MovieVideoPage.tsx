import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import {
	getMovieById,
	getMovieVideos,
	reorderVideos,
} from "../reducers/movieReducer";
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

	const handleChangeVideo = (videoObj: IVideo) => {
		const tempArray = video.filter((obj) => videoObj.key !== obj.key);
		tempArray.push(tempArray[0]);
		tempArray.shift();
		tempArray.unshift(videoObj);

		dispatch(reorderVideos(tempArray));
	};

	return (
		<div className="videoPage">
			{!loadingVideo && movie.length > 0 && video.length > 0 ? (
				<Grid
					container
					spacing={1}
					style={{ padding: "2vh 10vw 1vh 10vw" }}
				>
					<Grid item xs={12}>
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
									videos={video.slice(1)}
									handleChangeVideo={handleChangeVideo}
								/>
							</>
						)}
					</Grid>
				</Grid>
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

export default MovieVideoPage;
