import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import { getMovieById, getMovieVideos } from "../../reducers/movieReducer";
import { getMovieReviews } from "../../reducers/reviewReducer";

import {
	Button,
	Card,
	CardActions,
	CardMedia,
	CardContent,
	IconButton,
	Typography,
	Rating,
} from "@mui/material";

import { IMovieMinimal } from "../../models/movie-models";

import Icons from "../Icons";

interface MovieType {
	data: IMovieMinimal;
	handleClick: Function;
}

const LargeMovieCard = ({ data, handleClick }: MovieType) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { video } = useAppSelector((state) => state.movies);

	const handleNavigation = (data: IMovieMinimal, destination: string) => {
		dispatch(getMovieById(data.id));
		dispatch(getMovieVideos(data.id));
		dispatch(getMovieReviews(data.id));

		if (destination === "details") {
			navigate(`/movie/${data.id}`);
		} else {
			navigate(`/video/${data.id}`);
		}
	};

	return (
		<Card
			key={data.id}
			sx={{
				width: "100%",
				mt: 2,
				backgroundColor: "rgb(0,0,0,0)",
			}}
		>
			<div style={{ textAlign: "center", position: "relative" }}>
				<CardMedia
					component="img"
					sx={{
						height: "45vh",
						objectFit: "cover",
						position: "relative",
					}}
					loading="lazy"
					src={`http://localhost:5000/images/backdrops${data.backdrop}`}
					alt={data.title}
				/>
				<div
					style={{
						top: "46%",
						left: "46%",
						position: "absolute",
					}}
				>
					<IconButton onClick={() => handleNavigation(data, "video")}>
						<Icons.PlayLarge />
					</IconButton>
				</div>
				<div
					style={{
						top: "48%",
						left: "0%",
						position: "absolute",
					}}
				>
					<IconButton onClick={() => handleClick(data, -1)}>
						<Icons.ArrowBack />
					</IconButton>
				</div>
				<div
					style={{
						top: "48%",
						right: "0%",
						position: "absolute",
					}}
				>
					<IconButton onClick={() => handleClick(data, 1)}>
						<Icons.ArrowForward />
					</IconButton>
				</div>
			</div>
			<CardContent sx={{ color: "#ffffff", width: "100%" }}>
				<Typography variant="h6">{data.title}</Typography>
				<Rating
					name="readonly-rating"
					size="small"
					max={10}
					precision={0.1}
					value={data.vote_average}
					readOnly
				/>
				<Typography component="legend" variant="body2">
					{data.vote_count.toLocaleString()} votes
				</Typography>
				<Typography sx={{ pt: 2 }} variant="subtitle1">
					{data.tagline}
				</Typography>
				<CardActions style={{ margin: "0 0 -10px -15px" }}>
					<Button
						size="small"
						onClick={() => handleNavigation(data, "details")}
					>
						Information
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default LargeMovieCard;
