import { useState, useEffect } from "react";

import { MovieInterface } from "../models/movie-models";

import { Grid } from "@mui/material";

import LargeMovieCard from "../components/MediaContainers/LargeMovieCard";

import data from "../data";

import VerticalMovieCards from "../components/MediaContainers/VerticalMovieCards";
import HorizontalMovieCards from "../components/MediaContainers/HorizontalMovieCards";
import LargeHorizontalMovieCards from "../components/MediaContainers/LargeHorizontalMovieCards";

const HomePage = () => {
	const [isTopPick, setIsTopPick] = useState<MovieInterface>(data[0]);
	const [topPicks, setTopPicks] = useState<MovieInterface[]>(data);

	useEffect(() => {
		setTopPicks(data.filter((movie) => movie.id !== isTopPick.id));
	}, []);

	const handleClick = (movie: MovieInterface, index: number) => {
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
			<Grid
				container
				spacing={1}
				style={{
					display: "flex",
				}}
			>
				<Grid item xl={2} xs={0.5} />

				<Grid item xl={8} xs={11}>
					<h2 className="headerPageInfo">Editor's picks:</h2>
				</Grid>
				<Grid item xl={2} xs={0.5} />
			</Grid>

			<Grid container spacing={1}>
				<Grid item xl={2} xs={0.5} />

				<Grid item xl={5} lg={8} md={11} xs={11}>
					<LargeMovieCard
						data={isTopPick}
						handleClick={handleClick}
					/>
				</Grid>

				{/* Vertical on large, horizontal on small */}

				<Grid item xs={0.5}></Grid>

				<Grid
					item
					lg={3}
					display={{ xs: "none", sm: "none", lg: "block" }}
				>
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
					<HorizontalMovieCards
						data={topPicks}
						handleClick={handleClick}
					/>
				</Grid>
				<Grid item xl={2} xs={0.5}></Grid>
			</Grid>

			{/* Featured */}

			<Grid container spacing={1}>
				<Grid item xl={2} xs={0.5} />
				<Grid item xl={8} xs={11}>
					<h2 className="headerPageInfo">Featured:</h2>
				</Grid>
				<Grid item xl={2} xs={0.5} />

				<Grid item xl={2} xs={0.5} />
				<Grid item xl={8} xs={11}>
					<LargeHorizontalMovieCards data={topPicks} />
				</Grid>
				<Grid item xl={2} xs={0.5} />
			</Grid>
		</>
	);
};

export default HomePage;
