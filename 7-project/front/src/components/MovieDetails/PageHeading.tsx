import { MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
	addWatchListItem,
	removeWatchListItem,
} from "../../reducers/userReducer";

import {
	Box,
	Card,
	CardActions,
	CardMedia,
	Chip,
	CircularProgress,
	Grid,
	IconButton,
	Paper,
	Rating,
	Typography,
} from "@mui/material";

import { MovieInterface } from "../../models/movie-models";
import { INewWatchListItem } from "../../models/redux-models";

import Icons from "../../components/Icons";

type TMovieDetails = {
	movie: MovieInterface;
	popularityCeil: number;
	handleReviewScroll: MouseEventHandler;
	handleVideoScroll: MouseEventHandler;
};

const PageHeading = ({
	movie,
	popularityCeil,
	handleReviewScroll,
	handleVideoScroll,
}: TMovieDetails) => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.user);

	const exists = user?.watchList.find((obj) => obj.movie_id === movie.id);

	const voteCount = (count: number) => {
		if (count < 1000) {
			return " " + count;
		} else if (count >= 1000) {
			return " " + (movie.vote_count / 1000).toFixed(2) + " K";
		} else if (count >= 1000000) {
			return " " + (movie.vote_count / 1000000).toFixed(2) + " M";
		}
	};

	const popularityPercentage = (popularity: number) => {
		if (popularity) {
			let percentage = parseInt(
				((100 * popularity) / popularityCeil).toFixed()
			);

			return percentage;
		} else {
			return 0;
		}
	};

	const handleWatchListAdd = (movie: MovieInterface) => {
		let userId = user?.id;

		const movieObject = {
			id: movie.id,
			backdrop: movie.backdrop,
			popularity: movie.popularity,
			poster: movie.poster,
			tagline: movie.tagline,
			title: movie.title,
			video_count: movie.video_count,
			vote_average: movie.vote_average,
			vote_count: movie.vote_count,
		};

		if (userId) {
			const payload: INewWatchListItem = {
				movie: movieObject,
				user_id: userId,
			};

			dispatch(addWatchListItem(payload));
		}
	};

	const handleWatchListRemove = () => {
		if (user && user.id) {
			dispatch(removeWatchListItem(movie.id, user.id, movie.title));
		}
	};

	return (
		<div>
			<div
				className="backdropDetailsPage"
				style={{
					backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url("http://localhost:5000/images/backdrops${movie.backdrop}")`,
				}}
			/>
			<Grid
				container
				spacing={1}
				style={{
					padding: "30px 0 50px 0",
					marginTop: 0,
					minHeight: "550px",
				}}
				position={{
					xs: "relative",
					sm: "relative",
					md: "absolute",
				}}
			>
				<Grid item lg={2} md={1} sm={0.5} xs={0.5} />

				<Grid item lg={1} md={2} sm={3} xs={11}>
					<Card
						sx={{
							width: "250px",
							marginRight: "auto",
							marginLeft: "auto",
							mt: 1,
						}}
					>
						<CardMedia
							component="img"
							loading="lazy"
							src={`http://localhost:5000/images/posters${movie.poster}`}
							alt={movie.title}
						/>
					</Card>
					<Paper className="paperGenres">
						{movie.genres.map((genre) => (
							<Chip
								key={genre.id}
								color="info"
								style={{ margin: "5px" }}
								label={genre.name}
								variant="outlined"
							/>
						))}
					</Paper>
				</Grid>

				<Grid item md={1} sm={2} xs={0.5} />
				<Grid item sm={0} xs={0.5} />

				<Grid
					item
					lg={6}
					md={7}
					sm={5.5}
					xs={11}
					marginTop={{ xs: "103px", sm: 0, md: 0 }}
				>
					<h1
						style={{ marginTop: "-3px" }}
						className="headerPageInfo"
					>
						{movie.title}
					</h1>
					<h3 className="headerPageInfo">{movie.tagline}</h3>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<h3 className="headerPageInfo">MLiB rating: </h3>
							<div
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Rating
									name="size-large"
									value={parseFloat(
										(movie.vote_average / 10).toFixed(1)
									)}
									max={1}
									precision={0.1}
									size="large"
									readOnly
								/>
								<h4 style={{ margin: "0 0 0 10px" }}>
									{Math.round(movie.vote_average).toFixed(1)}{" "}
									/ 10 ·{voteCount(movie.vote_count)}
								</h4>
							</div>
						</Grid>
						<Grid item xs={6}>
							<h3 className="headerPageInfo">
								MLiB popularity:{" "}
							</h3>

							<Box
								sx={{
									position: "relative",
									display: "inline-flex",
									marginTop: "-8px",
								}}
							>
								<CircularProgress
									color="success"
									variant="determinate"
									value={popularityPercentage(
										movie.popularity
									)}
								/>
								<Box
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: "absolute",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										variant="caption"
										component="div"
										color="text.secondary"
									>{`${popularityPercentage(
										movie.popularity
									)}%`}</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>

					<p>{movie.overview}</p>
					<CardActions
						style={{
							display: "flex",
							flexWrap: "wrap",
						}}
					>
						{exists !== undefined ? (
							<div style={{ display: "flex" }}>
								<IconButton
									onClick={handleWatchListRemove}
									size="large"
								>
									<Icons.TrueFill />
								</IconButton>
								<h4 style={{ color: "#00d4ff" }}>Watch List</h4>
							</div>
						) : (
							<div style={{ display: "flex" }}>
								<IconButton
									disabled={user ? false : true}
									onClick={() => handleWatchListAdd(movie)}
									size="large"
								>
									<Icons.Add />
								</IconButton>
								<h4>Watch List</h4>
							</div>
						)}
						<div style={{ display: "flex", marginLeft: 0 }}>
							<IconButton
								onClick={handleReviewScroll}
								size="large"
							>
								<Icons.Edit />
							</IconButton>
							<h4>Leave a review</h4>
						</div>
						{movie.video_count > 0 && (
							<div style={{ display: "flex", marginLeft: 0 }}>
								<IconButton
									onClick={handleVideoScroll}
									size="large"
								>
									<Icons.Play />
								</IconButton>
								<h4>Watch Trailer</h4>
							</div>
						)}
					</CardActions>
				</Grid>
				<Grid item lg={2} md={1} sm={0.5} xs={0.5} />
			</Grid>
		</div>
	);
};

export default PageHeading;
