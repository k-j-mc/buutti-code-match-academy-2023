import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieById, getMovieVideos } from "../reducers/movieReducer";

import ReactPlayer from "react-player";

const MovieVideoPage = () => {
	const dispatch = useAppDispatch();

	const { video, movie, loadingVideo } = useAppSelector(
		(state) => state.movies
	);

	const locationName = window.location.pathname.substring(7);

	useEffect(() => {
		if (video.length <= 0) {
			dispatch(getMovieById(locationName));
			dispatch(getMovieVideos(locationName));
		}
	}, []);

	console.log(video);

	return (
		<div className="videoPage">
			{!loadingVideo && video.length > 0 ? (
				<>
					<h2 className="headerPageInfoCenter">{movie[0].title}</h2>
					<h3 className="headerPageInfoCenter">{video[0].name}</h3>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${video[0].key}`}
					/>
				</>
			) : (
				<p>Error...</p>
			)}
		</div>
	);
};

export default MovieVideoPage;
