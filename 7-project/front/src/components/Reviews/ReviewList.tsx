import { useState } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	List,
	Rating,
	Tooltip,
} from "@mui/material";

import { IReview } from "../../models/review-models";

import Icons from "../Icons";

type TReview = {
	movieReviews: IReview[];
	handleLikes: Function;
	showNumberResults: number;
};

type TSpoilers = {
	[key: string]: boolean;
};

const ReviewList = ({
	movieReviews,
	handleLikes,
	showNumberResults,
}: TReview) => {
	const { user } = useAppSelector((state) => state.user);

	const [spoilers, setSpoilers] = useState<TSpoilers>({});

	const showSpoilers = (id: string) => {
		setSpoilers((previousState: any) => ({
			...previousState,
			[id]: !previousState[id],
		}));
	};

	return (
		<List style={{ width: "100%" }}>
			{movieReviews.slice(0, showNumberResults).map((review: IReview) => (
				<Card
					style={{
						width: "100%",
						margin: "10px 0 20px 0",
					}}
					key={review.id}
				>
					<CardHeader
						avatar={
							<>
								{review.userName && (
									<Tooltip
										title={`${review.userFirstName} ${review.userLastName}`}
									>
										<Avatar
											alt={review.userName}
											className="userUpAvatar"
											sx={{
												backgroundColor: "#00d4ff",
											}}
										>
											{review.userName}
										</Avatar>
									</Tooltip>
								)}
							</>
						}
						title={
							<h3 style={{ marginTop: "-5px" }}>
								{review.title}
							</h3>
						}
						subheader={
							<Rating
								style={{ marginTop: "-10px" }}
								value={review.rating}
								max={10}
								readOnly
							/>
						}
					></CardHeader>

					<CardContent>
						{review.spoilers ? (
							<>
								{spoilers[review.id] ? (
									<>
										<Button
											onClick={() =>
												showSpoilers(review.id)
											}
											color="warning"
										>
											Hide spoilers
										</Button>
										<div style={{ display: "block" }}>
											<p>{review.review}</p>
										</div>
									</>
								) : (
									<Button
										onClick={() => showSpoilers(review.id)}
										color="error"
									>
										Show spoilers...
									</Button>
								)}
							</>
						) : (
							<div style={{ display: "block" }}>
								<p>{review.review}</p>
							</div>
						)}
					</CardContent>

					<CardActions disableSpacing>
						<IconButton
							disabled={!user ? true : false}
							size="large"
							onClick={() => handleLikes(review, "like")}
						>
							<Icons.Like />
						</IconButton>
						<h4>Helpful • {review.likes}</h4>

						<IconButton
							onClick={() => handleLikes(review, "dislike")}
							disabled={!user ? true : false}
							size="large"
						>
							<Icons.Dislike />
						</IconButton>
						<h4>{review.dislikes}</h4>
					</CardActions>
				</Card>
			))}
		</List>
	);
};

export default ReviewList;
