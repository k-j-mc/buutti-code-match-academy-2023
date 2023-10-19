import {
	Card,
	CardActionArea,
	CardMedia,
	ImageList,
	ImageListItem,
} from "@mui/material";

import { IMovieMinimal } from "../../models/movie-models";

type MovieType = {
	data: IMovieMinimal[];
};

const LargeHorizontalMovieCards = ({ data }: MovieType) => {
	return (
		<ImageList
			sx={{
				height: "25vh",
				display: "flex",
				flexDirection: "row",
				marginTop: "-30px",
			}}
			cols={1}
		>
			{data.map((movie: IMovieMinimal) => (
				<ImageListItem key={movie.id}>
					<Card
						key={movie.id}
						sx={{
							width: "150px",
							marginRight: "auto",
							mt: 4,
							mr: 4,
						}}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								loading="lazy"
								src={`http://localhost:5000/images/posters${movie.poster}`}
								alt={movie.title}
							/>
						</CardActionArea>
					</Card>
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default LargeHorizontalMovieCards;