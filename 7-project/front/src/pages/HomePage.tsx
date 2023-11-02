import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { reorderFeatured } from "../reducers/movieReducer";

import { Grid } from "@mui/material";

import { IMovieMinimal } from "../models/movie-models";

import Notification from "../components/Notifications/NotificationBox";

import LargeMovieCard from "../components/MediaContainers/LargeMovieCard";

import VerticalMovieCards from "../components/MediaContainers/VerticalMovieCards";
import HorizontalMovieCards from "../components/MediaContainers/HorizontalMovieCards";
import LargeHorizontalMovieCards from "../components/MediaContainers/LargeHorizontalMovieCards";
import LargeMovieCardSkeleton from "../components/Loaders/LargeMovieCardSkeleton";

const HomePage = () => {
	const {
		featuredMovies,
		topRatedMovies,
		actionMovies,
		horrorMovies,
		loadingFeaturedMovies,
		loadingAllMovies,
	} = useAppSelector((state) => state.movies);

	const { placement } = useAppSelector((state) => state.notification);

	const dispatch = useAppDispatch();

	const handleClick = (movie: IMovieMinimal, index: number) => {
		if (index === 0) {
			let tempArray = featuredMovies.filter(
				(obj: IMovieMinimal) => obj.id !== movie.id
			);

			tempArray.push(tempArray[0]);
			tempArray.shift();
			tempArray.unshift(movie);

			dispatch(reorderFeatured(tempArray));
		} else if (index === -1) {
			let tempArray = featuredMovies;
			let lastObj = featuredMovies[featuredMovies.length - 1];

			tempArray = tempArray.filter(
				(obj: IMovieMinimal) => obj.id !== lastObj.id
			);

			tempArray = [lastObj, ...tempArray];

			dispatch(reorderFeatured(tempArray));
		} else if (index === 1) {
			let tempArray = [...featuredMovies];

			tempArray.push(movie);
			tempArray.shift();

			dispatch(reorderFeatured(tempArray));
		}
	};

	return (
		<>
			{placement === "home" && (
				<div className="absoluteNotification">
					<Notification />
				</div>
			)}
			<Grid container spacing={1}>
				<Grid item xl={2} xs={0.5} />
				<Grid item xl={5} lg={8} md={11} xs={11}>
					{loadingFeaturedMovies ? (
						<LargeMovieCardSkeleton />
					) : (
						<LargeMovieCard
							data={featuredMovies[0]}
							handleClick={handleClick}
						/>
					)}
				</Grid>

				<Grid item xs={0.5}></Grid>

				<Grid
					item
					lg={3}
					display={{ xs: "none", sm: "none", lg: "block" }}
				>
					<h2 className="headerPageInfo">Featured:</h2>

					<VerticalMovieCards
						data={featuredMovies.slice(1)}
						handleClick={handleClick}
						loading={loadingFeaturedMovies}
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
						data={featuredMovies.slice(1)}
						handleClick={handleClick}
						loading={loadingFeaturedMovies}
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
					<LargeHorizontalMovieCards
						data={topRatedMovies}
						loading={loadingAllMovies}
					/>
				</Grid>
				<Grid item xl={2} xs={0.5} />

				<Grid item xl={2} xs={0.5} />
				<Grid item xl={8} xs={11}>
					<h2 className="headerPageInfo">Top Action:</h2>
				</Grid>
				<Grid item xl={2} xs={0.5} />

				<Grid item xl={2} xs={0.5} />
				<Grid item xl={8} xs={11}>
					<LargeHorizontalMovieCards
						data={actionMovies}
						loading={loadingAllMovies}
					/>
				</Grid>
				<Grid item xl={2} xs={0.5} />

				<Grid item xl={2} xs={0.5} />
				<Grid item xl={8} xs={11}>
					<h2 className="headerPageInfo">Top Horror:</h2>
				</Grid>
				<Grid item xl={2} xs={0.5} />

				<Grid item xl={2} xs={0.5} />
				<Grid item xl={8} xs={11}>
					<LargeHorizontalMovieCards
						data={horrorMovies}
						loading={loadingAllMovies}
					/>
				</Grid>
				<Grid item xl={2} xs={0.5} />
			</Grid>
		</>
	);
};

export default HomePage;
