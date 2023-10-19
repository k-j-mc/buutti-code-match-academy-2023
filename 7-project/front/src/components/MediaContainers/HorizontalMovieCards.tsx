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
	handleClick: Function;
};

const HorizontalMovieCards = ({ data, handleClick }: MovieType) => {
	return (
		<ImageList
			sx={{
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
							width: "100px",
							marginRight: "auto",
							mt: 4,
							mr: 4,
						}}
						onClick={() => handleClick(movie, 0)}
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

export default HorizontalMovieCards;
