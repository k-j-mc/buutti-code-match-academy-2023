import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";

import { getMovieById, getMovieVideos } from "../../reducers/movieReducer";
import { getMovieReviews } from "../../reducers/reviewReducer";

import {
	Card,
	CardActionArea,
	CardMedia,
	ImageList,
	ImageListItem,
} from "@mui/material";

import { IMovieMinimal } from "../../models/movie-models";
import MovieCardSkeleton from "../Loaders/MovieCardSkeleton";

type MovieType = {
	data: IMovieMinimal[];
	loading: boolean;
};

const LargeHorizontalMovieCards = ({ data, loading }: MovieType) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleNavigationClick = (movie: IMovieMinimal) => {
		dispatch(getMovieById(movie.id));
		dispatch(getMovieVideos(movie.id));
		dispatch(getMovieReviews(movie.id));

		navigate(`/movie/${movie.id}`);
	};

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
					{loading ? (
						<MovieCardSkeleton
							height="225px"
							width="150px"
							borderRadius="0px"
							marginTop={4}
							marginRight={4}
						/>
					) : (
						<Card
							sx={{
								height: "225px",
								width: "150px",
								marginRight: "auto",
								mt: 4,
								mr: 4,
							}}
						>
							<CardActionArea
								onClick={() => handleNavigationClick(movie)}
							>
								<CardMedia
									component="img"
									loading="lazy"
									src={`http://localhost:5000/images/posters${movie.poster}`}
									alt={movie.title}
								/>
							</CardActionArea>
						</Card>
					)}
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default LargeHorizontalMovieCards;
