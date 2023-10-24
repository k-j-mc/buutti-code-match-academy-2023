import React from "react";

import {
	Avatar,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	Paper,
} from "@mui/material";

import { IReview } from "../../models/review-models";

type TReview = {
	movieReviews: IReview[];
};

const ReviewList = ({ movieReviews }: TReview) => {
	return (
		<List>
			{movieReviews.map((review: IReview) => (
				<ListItem key={review.id} alignItems="flex-start">
					<Paper elevation={24} style={{ width: "100%" }}>
						<p>{review.title}</p>
					</Paper>
				</ListItem>
			))}
		</List>
	);
};

export default ReviewList;
