import ReactPlayer from "react-player";

type TVideo = {
	video: string;
};

const Video = ({ video }: TVideo) => {
	return (
		<div>
			<iframe width="420" height="315" src={video}></iframe>
		</div>
	);
};

export default Video;
