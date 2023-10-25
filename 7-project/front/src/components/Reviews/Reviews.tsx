import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import { likeReview } from "../../reducers/reviewReducer";

import { Button, Grid } from "@mui/material";

import { IReview } from "../../models/review-models";

import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import NoReviews from "./NoReviews";
import NoUser from "./NoUser";

import Notification from "../Notifications/NotificationBox";

import Icons from "../Icons";

type TReview = {
	movieReviews: IReview[];
	loadingMovieReviews: boolean;
};

const Reviews = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.user);

	const { movieReviews, loadingMovieReviews } = useAppSelector(
		(state) => state.reviews
	);

	const [reviewFormActive, setReviewFormActive] = useState<boolean>(false);
	const [showNumberResults, setShowNumberResults] = useState<number>(1);

	const handleLikes = (review: IReview, type: string) => {
		if (type === "like") {
			dispatch(likeReview({ ...review, likes: review.likes + 1 }));
		} else {
			dispatch(likeReview({ ...review, dislikes: review.dislikes + 1 }));
		}
	};

	const handleResultsLength = () => {
		setShowNumberResults(showNumberResults + 5);
	};

	return (
		<div className="reviews">
			<Grid container spacing={2}>
				<Grid item lg={2} md={1} xs={0.5} />

				<Grid item lg={8} md={10} xs={11}>
					{!loadingMovieReviews ? (
						<div>
							<Notification />

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

							{!reviewFormActive ? (
								<Button
									style={{
										float: "right",
										marginTop: "17px",
									}}
									color="primary"
									startIcon={<Icons.Add />}
									onClick={() =>
										setReviewFormActive(!reviewFormActive)
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
										setReviewFormActive(!reviewFormActive)
									}
								>
									Cancel
								</Button>
							)}
							{reviewFormActive && user ? (
								<ReviewForm
									setReviewFormActive={setReviewFormActive}
								/>
							) : (
								reviewFormActive && !user && <NoUser />
							)}
							{movieReviews.length > 0 && !reviewFormActive ? (
								<ReviewList
									movieReviews={movieReviews}
									handleLikes={handleLikes}
									showNumberResults={showNumberResults}
								/>
							) : (
								!reviewFormActive && <NoReviews />
							)}
						</div>
					) : (
						<p>loading Reviews...</p>
					)}
					<div
						style={{
							margin: "-20px 0 10px 0",
							textAlign: "center",
						}}
					>
						{movieReviews.length > showNumberResults &&
							!reviewFormActive && (
								<Button
									onClick={handleResultsLength}
									startIcon={<Icons.Add />}
								>
									Show more results
								</Button>
							)}
					</div>
				</Grid>
				<Grid item lg={2} md={1} xs={0.5} />
			</Grid>
		</div>
	);
};

export default Reviews;
