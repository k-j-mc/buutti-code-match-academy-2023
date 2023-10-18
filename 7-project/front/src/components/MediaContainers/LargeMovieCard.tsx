import {
	Card,
	CardMedia,
	CardContent,
	IconButton,
	Typography,
	Rating,
} from "@mui/material";

import { MovieInterface } from "../../models/movie-models";

import Icons from "../Icons";

interface MovieType {
	data: MovieInterface;
	handleClick: Function;
}

const LargeMovieCard = ({ data, handleClick }: MovieType) => {
	return (
		<Card
			key={data.id}
			sx={{
				width: "100%",
				mt: 2,
				backgroundColor: "rgb(0,0,0,0)",
			}}
		>
			<CardContent sx={{ color: "#ffffff", width: "100%" }}>
				<div style={{ textAlign: "center", position: "relative" }}>
					<CardMedia
						component="img"
						sx={{
							height: "45vh",
							objectFit: "cover",
							position: "relative",
						}}
						src={`data:image/jpeg;base64,${data.backdrop}`}
						alt={data.title}
					/>
					<div
						style={{
							top: "46%",
							left: "46%",
							position: "absolute",
						}}
					>
						<IconButton>
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
				<Typography variant="h6">{data.title}</Typography>
				<Rating
					name="readonly-rating"
					size="small"
					max={10}
					precision={0.1}
					value={parseFloat(data.vote_average)}
					readOnly
				/>
				<Typography component="legend" variant="body2">
					{data.vote_count.toLocaleString()} votes
				</Typography>
				<Typography variant="subtitle2">
					{data.overview.substring(0, 250)}...
				</Typography>
			</CardContent>
		</Card>
	);
};

export default LargeMovieCard;
