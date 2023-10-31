import {
	Card,
	CardActionArea,
	CardMedia,
	ImageList,
	ImageListItem,
} from "@mui/material";

import MovieCardSkeleton from "../Loaders/MovieCardSkeleton";

import { IMovieMinimal } from "../../models/movie-models";

type MovieType = {
	data: IMovieMinimal[];
	handleClick: Function;
	loading: boolean;
};

const HorizontalMovieCards = ({ data, handleClick, loading }: MovieType) => {
	const loadingLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<ImageList
			sx={{
				display: "flex",
				flexDirection: "row",
				marginTop: "-30px",
			}}
			cols={1}
		>
			{loading ? (
				<>
					{loadingLoop.map((obj) => (
						<ImageListItem key={obj}>
							<MovieCardSkeleton
								key={obj}
								height="150px"
								width="100px"
								borderRadius="0px"
								marginTop={4}
								marginRight={4}
							/>
						</ImageListItem>
					))}
				</>
			) : (
				<>
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
				</>
			)}
		</ImageList>
	);
};

export default HorizontalMovieCards;
