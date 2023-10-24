import { useEffect, Fragment } from "react";

import {
	Box,
	Card,
	CardMedia,
	Chip,
	CircularProgress,
	Grid,
	Paper,
	Rating,
	Typography,
} from "@mui/material";

import { MovieInterface } from "../../models/movie-models";

import countryData from "../../tools/countryData";

import "semantic-ui-flag/flag.min.css";
import Icons from "../../components/Icons";

type TMovieDetails = {
	movie: MovieInterface;
	popularityCeil: number;
};

const PageHeading = ({ movie, popularityCeil }: TMovieDetails) => {
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
			return parseInt(((100 * popularity) / popularityCeil).toFixed());
		} else {
			return 0;
		}
	};

	const getFlag = (language: string) => {
		if (language === "en") {
			return "gb";
		} else {
			const filter = countryData.filter((flag: any) => {
				return flag.language === language.toLowerCase() ? flag : "";
			});

			if (filter.length <= 0) {
				return "";
			} else {
				return filter[0].code;
			}
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
								style={{ margin: "0 5px 0 5px" }}
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
				</Grid>
				<Grid item lg={2} md={1} sm={0.5} xs={0.5} />

				{/* <Grid container spacing={2}>
							<Grid item lg={2} md={1} sm={0.5} xs={0.5} />

							<Grid item lg={8} sm={11} xs={11}>
								<p>Release date: {movie.release_date}</p>
								<p>
									Original language:{" "}
									<i
										className={
											getFlag(
												movie[0].original_language
											) + " flag"
										}
									/>
								</p>
								<p>
									Spoken languages:{" "}
									{movie.spoken_languages.map(
										(language, index) => (
											<Fragment
												key={language + Math.random()}
											>
												{language !== "" && (
													<i
														className={
															getFlag(language) +
															" flag"
														}
													/>
												)}
											</Fragment>
										)
									)}
								</p>
							</Grid>
							<Grid item lg={2} md={1} sm={0.5} xs={0.5} />
						</Grid> */}
			</Grid>
		</div>
	);
};

export default PageHeading;