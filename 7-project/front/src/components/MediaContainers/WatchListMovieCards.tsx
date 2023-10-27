import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import { getMovieById, getMovieVideos } from "../../reducers/movieReducer";
import { getMovieReviews } from "../../reducers/reviewReducer";
import { removeWatchListItem } from "../../reducers/userReducer";

import {
	Card,
	CardActions,
	CardMedia,
	IconButton,
	Tooltip,
} from "@mui/material";

import { IWatchList } from "../../models/redux-models";

import Icons from "../Icons";

type TWatchList = {
	data: IWatchList;
};

const WatchListMovieCards = ({ data }: TWatchList) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { user } = useAppSelector((state) => state.user);

	const handleNavigationClick = () => {
		dispatch(getMovieById(data.movie_id));
		dispatch(getMovieVideos(data.movie_id));
		dispatch(getMovieReviews(data.movie_id));

		navigate(`/movie/${data.movie_id}`);
	};

	const handleWatchListRemove = () => {
		if (user && user.id) {
			dispatch(removeWatchListItem(data.movie_id, user.id, data.title));
		}
	};

	return (
		<Card
			sx={{
				width: "90%",
				margin: "auto",
				mt: 4,
			}}
		>
			<CardMedia
				component="img"
				loading="lazy"
				src={`http://localhost:5000/images/posters${data.poster}`}
				alt={data.title}
			/>
			<CardActions
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<Tooltip title="Details">
					<IconButton
						onClick={handleNavigationClick}
						style={{ marginRight: "auto" }}
					>
						<Icons.Seen />
					</IconButton>
				</Tooltip>
				<Tooltip title="Remove">
					<IconButton
						onClick={handleWatchListRemove}
						style={{ marginLeft: "auto" }}
					>
						<Icons.Delete />
					</IconButton>
				</Tooltip>
			</CardActions>
		</Card>
	);
};

export default WatchListMovieCards;
