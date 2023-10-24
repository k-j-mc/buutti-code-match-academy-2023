import React from "react";

import { IReview } from "../../models/review-models";

type TReview = {
	movieReviews: IReview[];
	loadingMovieReviews: boolean;
};

const Reviews = ({ movieReviews, loadingMovieReviews }: TReview) => {
	console.log(movieReviews);
	console.log(loadingMovieReviews);

	return <div className="reviews">Reviews</div>;
};

export default Reviews;
