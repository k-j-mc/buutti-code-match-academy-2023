import { useState } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import {
	Button,
	Card,
	CardActions,
	CardMedia,
	CardContent,
	Grid,
	IconButton,
	InputAdornment,
	Typography,
	Rating,
} from "@mui/material";

import { IReview } from "../../models/review-models";

import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import NoReviews from "./NoReviews";
import NoUser from "./NoUser";

import Icons from "../Icons";

type TReview = {
	movieReviews: IReview[];
	loadingMovieReviews: boolean;
};

const Reviews = ({ movieReviews, loadingMovieReviews }: TReview) => {
	const { user } = useAppSelector((state) => state.user);

	const [reviewActive, setReviewActive] = useState<boolean>(false);

	console.log(user);
	console.log(movieReviews);
	console.log(loadingMovieReviews);

	return (
		<div className="reviews">
			<Grid container spacing={2}>
				<Grid item lg={2} md={1} xs={0.5} />

				<Grid item lg={8} md={10} xs={11}>
					{!loadingMovieReviews ? (
						<div>
							<h2
								className="headerPageInfo"
								style={{ display: "inline-block" }}
							>
								Reviews
							</h2>
							{" - "}
							<h3
								className="headerPageInfo"
								style={{ display: "inline-block" }}
							>
								{movieReviews.length}
							</h3>

							{!reviewActive ? (
								<Button
									style={{
										float: "right",
										marginTop: "17px",
									}}
									color="primary"
									startIcon={<Icons.Add />}
									onClick={() =>
										setReviewActive(!reviewActive)
									}
								>
									Leave a review
								</Button>
							) : (
								<Button
									style={{
										float: "right",
										marginTop: "17px",
									}}
									color="error"
									startIcon={<Icons.Close />}
									onClick={() =>
										setReviewActive(!reviewActive)
									}
								>
									Cancel
								</Button>
							)}
							{reviewActive && user ? (
								<ReviewForm />
							) : (
								reviewActive && !user && <NoUser />
							)}
							<ReviewList movieReviews={movieReviews} />
						</div>
					) : (
						<p>loading Reviews...</p>
					)}
				</Grid>
				<Grid item lg={2} md={1} xs={0.5} />
			</Grid>
		</div>
	);
};

export default Reviews;
