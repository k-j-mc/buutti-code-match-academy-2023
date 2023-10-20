import {
	Card,
	CardActionArea,
	CardMedia,
	ImageList,
	ImageListItem,
} from "@mui/material";

import { IVideo } from "../../models/movie-models";

type MovieType = {
	videos: IVideo[];
	handleClick: Function;
};

const HorizontalVideoCards = ({ videos, handleClick }: MovieType) => {
	return (
		<ImageList
			sx={{
				display: "flex",
				flexDirection: "row",
				marginTop: "-30px",
			}}
			cols={1}
		>
			{videos.map((video: any) => (
				<ImageListItem key={video.key}>
					<Card
						sx={{
							width: "200px",
							marginRight: "auto",
							mt: 4,
							mr: 4,
						}}
						onClick={() => handleClick(video)}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								loading="lazy"
								src={`http://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
								alt={video.name}
							/>
						</CardActionArea>
					</Card>
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default HorizontalVideoCards;
