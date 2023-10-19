import {
	CardActionArea,
	CardContent,
	CardMedia,
	ImageList,
	ImageListItem,
	Rating,
	Typography,
} from "@mui/material";

import { IMovieMinimal } from "../../models/movie-models";

type MoviesType = {
	data: IMovieMinimal[];
	handleClick: Function;
};

const VerticalMovieCards = ({ data, handleClick }: MoviesType) => {
	return (
		<ImageList sx={{ height: "53vh" }} cols={1}>
			{data.map((movie: IMovieMinimal) => (
				<ImageListItem key={movie.id}>
					<CardActionArea
						key={movie.id}
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
								width: "5vw",
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
							<Typography component="legend" variant="body2">
								{movie.vote_count.toLocaleString()} votes
							</Typography>
						</CardContent>
					</CardActionArea>
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default VerticalMovieCards;
