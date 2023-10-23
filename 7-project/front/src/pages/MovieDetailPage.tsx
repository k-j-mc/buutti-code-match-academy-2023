import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieById, getMovieVideos } from "../reducers/movieReducer";
import { Card, CardMedia, Chip, Grid, Paper, Rating } from "@mui/material";

import LoaderLargeCircle from "../components/Loaders/LoaderLargeCircle";

import Icons from "../components/Icons";

const MovieDetailPage = () => {
	const dispatch = useAppDispatch();

	const { video, movie, loadingVideo } = useAppSelector(
		(state) => state.movies
	);

	const locationName = window.location.pathname.substring(7);

	useEffect(() => {
		if (movie.length <= 0) {
			dispatch(getMovieById(locationName));
		}
		if (video.length <= 0) {
			dispatch(getMovieVideos(locationName));
		}
	}, []);

	console.log(movie[0]);

	return (
		<div className="detailsPage">
			{!loadingVideo && movie.length > 0 && movie.length > 0 ? (
				<div>
					<div
						className="backdropDetailsPage"
						style={{
							backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url("http://localhost:5000/images/backdrops${movie[0].backdrop}")`,
						}}
					/>
					<Grid
						container
						spacing={1}
						style={{ position: "absolute", marginTop: "30px" }}
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
									src={`http://localhost:5000/images/posters${movie[0].poster}`}
									alt={movie[0].title}
								/>
							</Card>
							<Paper className="paperGenres">
								{movie[0].genres.map((genre) => (
									<Chip
										key={genre.id}
										color="info"
										style={{ margin: "0 5px 0 5px" }}
										label={genre.name}
										variant="outlined"
									/>
								))}
							</Paper>
						</Grid>

						<Grid item md={1} sm={2} xs={0.5} />
						<Grid item sm={0} xs={0.5} />

						<Grid item lg={6} md={7} sm={5.5} xs={11}>
							<h1 className="headerPageInfo">{movie[0].title}</h1>
							<h3 className="headerPageInfo">
								{movie[0].tagline}
							</h3>
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
										(movie[0].vote_average / 10).toFixed(1)
									)}
									max={1}
									precision={0.1}
									size="large"
									readOnly
								/>
								<h4 style={{ margin: "0 0 0 10px" }}>
									{movie[0].vote_average} / 10
								</h4>
							</div>
							<p>{movie[0].overview}</p>
						</Grid>
						<Grid item lg={2} md={1} sm={0.5} xs={0.5} />
					</Grid>
				</div>
			) : (
				<LoaderLargeCircle
					loading={loadingVideo}
					styleName="loaderMain"
					size={200}
				/>
			)}
		</div>
	);
};

export default MovieDetailPage;
