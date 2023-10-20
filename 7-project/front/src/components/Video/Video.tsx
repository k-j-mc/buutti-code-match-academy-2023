import { useState } from "react";
import ReactPlayer from "react-player";

import LoaderLargeCircle from "../Loaders/LoaderLargeCircle";

type TVideo = {
	video: string;
};

const Video = ({ video }: TVideo) => {
	const [videoLoading, setVideoLoading] = useState<boolean>();

	return (
		<div>
			<div className="videoContainer">
				{!videoLoading ? (
					<ReactPlayer
						playing={false}
						controls={false}
						url={`https://www.youtube.com/watch?v=${video}`}
						onLoad={() => setVideoLoading(false)}
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
