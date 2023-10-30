import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	ImageList,
	ImageListItem,
	IconButton,
	Tooltip,
} from "@mui/material";

import notFound from "../../images/notFound.png";

import Icons from "../Icons";

type TCast = {
	character: string;
	id: string;
	movie_id: string;
	name: string;
	profile: string;
	tmdb_id: string;
};

const MovieCast = () => {
	const { movie } = useAppSelector((state) => state.movies);

	const imageOnErrorHandler = (
		event: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		event.currentTarget.src = notFound;
	};

	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={1} />
				<Grid item xs={10}>
					<h2
						className="headerPageInfo"
						style={{ display: "inline-block" }}
					>
						Top Cast
					</h2>
					<ImageList
						sx={{
							display: "flex",
							flexDirection: "row",
							padding: "15px",
						}}
						cols={1}
					>
						{movie[0].cast.map((obj: any) => (
							<ImageListItem key={obj.id}>
								<Card
									style={{
										height: "300px",
										width: "140px",
									}}
								>
									<CardMedia
										component="img"
										loading="lazy"
										src={
											obj.profile &&
											`http://localhost:5000/images/profiles${obj.profile}`
												? `http://localhost:5000/images/profiles${obj.profile}`
												: notFound
										}
										alt={obj.name}
										onError={imageOnErrorHandler}
									/>
									<CardContent
										style={{ padding: "0 5px 0 5px" }}
									>
										<h5>{obj.name}</h5>
										<h6>{obj.character}</h6>
									</CardContent>
								</Card>
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
				<Grid item xs={1} />
			</Grid>
		</>
	);
};

export default MovieCast;
