import {
	CardActionArea,
	CardContent,
	CardMedia,
	ImageList,
	ImageListItem,
	Rating,
	Typography,
} from "@mui/material";

import MovieCardSkeleton from "../Loaders/MovieCardSkeleton";

import { IMovieMinimal } from "../../models/movie-models";

type MoviesType = {
	data: IMovieMinimal[];
	handleClick: Function;
	loading: boolean;
};

const VerticalMovieCards = ({ data, handleClick, loading }: MoviesType) => {
	const loadingLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<ImageList sx={{ height: "53vh" }} cols={1}>
			{loading ? (
				<>
					{loadingLoop.map((obj) => (
						<ImageListItem
							sx={{
								mb: 4,
							}}
						>
							<MovieCardSkeleton
								key={obj}
								height="130px"
								width="90%"
								borderRadius="15px"
								marginTop={0}
								marginRight={0}
							/>
						</ImageListItem>
					))}
				</>
			) : (
				<>
					{data.map((movie: IMovieMinimal) => (
						<ImageListItem key={movie.id}>
							<CardActionArea
								sx={{
									width: "90%",
									borderRadius: "15px",
									marginRight: "auto",
									mb: 4,
									display: "flex",
									backgroundColor: "#121212",
								}}
								onClick={() => handleClick(movie, 0)}
							>
								<CardMedia
									component="img"
									style={{
										height: "125px",
										width: "75px",
										borderTopLeftRadius: "15px",
										borderBottomLeftRadius: "15px",
									}}
									loading="lazy"
									src={`http://localhost:5000/images/posters${movie.poster}`}
									alt={movie.title}
								/>
								<CardContent
									sx={{
										flex: "1 1 auto",
										color: "#ffffff",
									}}
								>
									<Typography variant="body2">
										{movie.title}
									</Typography>
									<Rating
										name="readonly-rating"
										size="small"
										max={5}
										precision={0.1}
										value={movie.vote_average / 2}
										readOnly
									/>
									<Typography
										component="legend"
										variant="body2"
									>
										{movie.vote_count.toLocaleString()}{" "}
										votes
									</Typography>
								</CardContent>
							</CardActionArea>
						</ImageListItem>
					))}
				</>
			)}
		</ImageList>
	);
};

export default VerticalMovieCards;
