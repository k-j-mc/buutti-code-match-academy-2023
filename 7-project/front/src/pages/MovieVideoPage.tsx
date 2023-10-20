import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieById, getMovieVideos } from "../reducers/movieReducer";

import Video from "../components/Video/Video";

import LoaderLargeCircle from "../components/Loaders/LoaderLargeCircle";

const MovieVideoPage = () => {
	const dispatch = useAppDispatch();

	const { video, movie, loadingVideo } = useAppSelector(
		(state) => state.movies
	);

	const locationName = window.location.pathname.substring(7);

	// useEffect(() => {
	// 	dispatch(getMovieById(locationName));
	// 	dispatch(getMovieVideos(locationName));
	// }, []);

	console.log(video);
	console.log(movie);

	return (
		<div className="videoPage">
			{!loadingVideo && video.length > 0 ? (
				<>
					<h2 className="headerPageInfoCenter">{movie[0].title}</h2>
					<h3 className="headerPageInfoCenter">{video[0].name}</h3>
					<Video
						video={`https://www.youtube.com/embed/${video[0].key}`}
					/>
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

export default MovieVideoPage;
