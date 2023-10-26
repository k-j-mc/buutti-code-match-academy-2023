import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";

import { Grid } from "@mui/material";

import { IMovieMinimal } from "../models/movie-models";

import LoaderLargeCircle from "../components/Loaders/LoaderLargeCircle";
import Notification from "../components/Notifications/NotificationBox";

import LargeMovieCard from "../components/MediaContainers/LargeMovieCard";

import VerticalMovieCards from "../components/MediaContainers/VerticalMovieCards";
import HorizontalMovieCards from "../components/MediaContainers/HorizontalMovieCards";
import LargeHorizontalMovieCards from "../components/MediaContainers/LargeHorizontalMovieCards";

const HomePage = () => {
	const {
		featuredMovies,
		topRatedMovies,
		actionMovies,
		horrorMovies,
		allMovies,
		loadingFeaturedMovies,
		loadingAllMovies,
	} = useAppSelector((state) => state.movies);

	const movies = useAppSelector((state) => state.movies);

	const [isTopPick, setIsTopPick] = useState<IMovieMinimal>(
		featuredMovies[0]
	);
	const [topPicks, setTopPicks] = useState<IMovieMinimal[]>(featuredMovies);

	useEffect(() => {
		if (!loadingFeaturedMovies) {
			setIsTopPick(featuredMovies[0]);
			setTopPicks(
				featuredMovies.filter(
					(movie) => movie.id !== featuredMovies[0].id
				)
			);
		}
	}, [featuredMovies]);

	const handleClick = (movie: IMovieMinimal, index: number) => {
		const tempArray = [...topPicks, isTopPick];
		const tempArray2 = [isTopPick, ...topPicks];
		let movieObj = movie;

		if (index === 0) {
			setIsTopPick(movie);
		} else if (index === 1) {
			setIsTopPick(tempArray[0]);
			movieObj = tempArray[0];
		} else {
			setIsTopPick(tempArray2[tempArray2.length - 1]);
			movieObj = tempArray2[tempArray2.length - 1];
		}
		if (index >= 0) {
			setTopPicks(tempArray.filter((obj: any) => obj.id !== movieObj.id));
		} else {
			setTopPicks(
				tempArray2.filter((obj: any) => obj.id !== movieObj.id)
			);
		}
	};

	return (
		<>
			{!loadingFeaturedMovies && topPicks.length > 0 ? (
				<>
					<Grid container spacing={1}>
						<Grid item xl={2} xs={0.5} />
						<Grid item xl={5} lg={8} md={11} xs={11}>
							<Notification />
							<LargeMovieCard
								data={isTopPick}
								handleClick={handleClick}
							/>
						</Grid>

						<Grid item xs={0.5}></Grid>

						<Grid
							item
							lg={3}
							display={{ xs: "none", sm: "none", lg: "block" }}
						>
							<h2 className="headerPageInfo">Featured:</h2>

							<VerticalMovieCards
								data={topPicks}
								handleClick={handleClick}
							/>
						</Grid>
						<Grid item xs={0.5}></Grid>
						<Grid
							item
							xs={11}
							display={{ xs: "block", sm: "block", lg: "none" }}
						>
							<h2 className="headerPageInfo">Featured:</h2>

							<HorizontalMovieCards
								data={topPicks}
								handleClick={handleClick}
							/>
						</Grid>
						<Grid item xl={2} xs={0.5}></Grid>
					</Grid>

					<Grid container spacing={1}>
						<Grid item xl={2} xs={0.5} />
						<Grid item xl={8} xs={11}>
							<h2 className="headerPageInfo">Top watches:</h2>
						</Grid>
						<Grid item xl={2} xs={0.5} />

						<Grid item xl={2} xs={0.5} />
						<Grid item xl={8} xs={11}>
							<LargeHorizontalMovieCards data={topRatedMovies} />
						</Grid>
						<Grid item xl={2} xs={0.5} />

						<Grid item xl={2} xs={0.5} />
						<Grid item xl={8} xs={11}>
							<h2 className="headerPageInfo">Top Action:</h2>
						</Grid>
						<Grid item xl={2} xs={0.5} />

						<Grid item xl={2} xs={0.5} />
						<Grid item xl={8} xs={11}>
							<LargeHorizontalMovieCards data={actionMovies} />
						</Grid>
						<Grid item xl={2} xs={0.5} />

						<Grid item xl={2} xs={0.5} />
						<Grid item xl={8} xs={11}>
							<h2 className="headerPageInfo">Top Horror:</h2>
						</Grid>
						<Grid item xl={2} xs={0.5} />

						<Grid item xl={2} xs={0.5} />
						<Grid item xl={8} xs={11}>
							<LargeHorizontalMovieCards data={horrorMovies} />
						</Grid>
						<Grid item xl={2} xs={0.5} />
					</Grid>
				</>
			) : (
				<LoaderLargeCircle
					loading={loadingAllMovies}
					styleName="loaderMain"
					size={200}
				/>
			)}
		</>
	);
};

export default HomePage;
