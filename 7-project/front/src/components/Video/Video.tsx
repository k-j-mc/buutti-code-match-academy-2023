import { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

import LoaderLargeCircle from "../Loaders/LoaderLargeCircle";

type TVideo = {
	video: string;
};

type TPlayer = {
	playerVars: TPlayerOptions;
};

type TPlayerOptions = {
	autoplay: 0 | 1 | undefined;
	controls: 0 | 1 | undefined;
	rel: 0 | 1 | undefined;
	showinfo: 0 | 1 | undefined;
	mute: 0 | 1 | undefined;
	loop: 0 | 1 | undefined;
};

const Video = ({ video }: TVideo) => {
	const [videoLoading, setVideoLoading] = useState<boolean>();

	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		event.target.playVideo();

		setVideoLoading(false);
	};

	const options: TPlayer = {
		playerVars: {
			autoplay: 1,
			controls: 1,
			rel: 0,
			showinfo: 0,
			mute: 1,
			loop: 1,
		},
	};

	return (
		<div>
			<div className="videoContainer">
				{!videoLoading ? (
					<YouTube
						videoId={video}
						id="video"
						opts={options}
						onReady={onPlayerReady}
					/>
				) : (
					<LoaderLargeCircle
						loading={videoLoading}
						styleName="loaderMain"
						size={200}
					/>
				)}
			</div>
		</div>
	);
};

export default Video;
