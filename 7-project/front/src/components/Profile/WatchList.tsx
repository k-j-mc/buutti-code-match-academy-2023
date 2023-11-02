import { useAppSelector } from "../../hooks/redux-hooks";

import { Grid, ImageListItem } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import { IWatchList } from "../../models/redux-models";

import WatchListMovieCards from "../MediaContainers/WatchListMovieCards";

const WatchList = () => {
	const { user } = useAppSelector((state) => state.user);

	return (
		<Grid container spacing={1}>
			<Grid item xs={0.5} />
			<Grid item xs={11}>
				{user && user?.watchList.length > 0 ? (
					<Masonry
						sx={{
							marginTop: "-30px",
							display: "flex",
							alignItems: "center",
							flexDirection: "center",
						}}
						columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
					>
						{user?.watchList.map((movie: IWatchList) => (
							<ImageListItem key={movie.id}>
								<WatchListMovieCards data={movie} />
							</ImageListItem>
						))}
					</Masonry>
				) : (
					<p>No movies currently in watch list</p>
				)}
			</Grid>
			<Grid item xs={0.5} />
		</Grid>
	);
};

export default WatchList;
