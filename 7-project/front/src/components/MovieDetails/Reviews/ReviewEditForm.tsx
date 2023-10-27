import { useState, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { editReview } from "../../../reducers/reviewReducer";
import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Rating,
	TextField,
} from "@mui/material";

import { IReview, IEditReview } from "../../../models/review-models";

type TReviewEdit = {
	review: IReview;
	setEditFormActive: Function;
};

const ReviewEditForm = ({ review, setEditFormActive }: TReviewEdit) => {
	const dispatch = useAppDispatch();

	const { movie } = useAppSelector((state) => state.movies);
	const { user } = useAppSelector((state) => state.user);

	const [title, setTitle] = useState<string>(review.title);
	const [reviewText, setReviewText] = useState<string>(review.review);
	const [rating, setRating] = useState<number | null>(review.rating);
	const [spoilers, setSpoilers] = useState<boolean>(review.spoilers);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const date = new Date();

		const reviewObject: IEditReview = {
			id: review.id,
			published_at: date.toString(),
			spoilers: spoilers,
			title: title,
			review: reviewText,
			rating: rating,
			likes: 0,
			dislikes: 0,
		};

		dispatch(editReview(reviewObject));

		setTitle("");
		setReviewText("");
		setRating(0);
		setSpoilers(false);

		setEditFormActive(false);
	};
	return (
		<div>
			<Grid container spacing={1} style={{ minHeight: "300px" }}>
				<Grid item xs={2} />
				<Grid item xs={8}>
					<form onSubmit={handleSubmit}>
						<p
							style={{
								fontStyle: "italic",
								marginBottom: "30px",
							}}
						>
							Please note: When editing your review, your helpful
							and unhelpful stats will be 0...
						</p>
						<Rating
							name="simple-controlled"
							onChange={(event, newValue) => {
								setRating(newValue);
							}}
							value={rating}
							max={10}
						/>

						<TextField
							fullWidth
							id="outlined-required-reviewTitle"
							label="Give your review a title!"
							value={title}
							onChange={({ target }) => setTitle(target.value)}
							sx={{ mt: 4 }}
						/>

						<TextField
							fullWidth
							multiline
							minRows={5}
							id="outlined-required-Review"
							label={`How was your experience of: ${movie[0].title}?`}
							value={reviewText}
							onChange={({ target }) =>
								setReviewText(target.value)
							}
							sx={{ mt: 4, mb: 4 }}
						/>

						<FormControlLabel
							checked={spoilers}
							onChange={() => setSpoilers(!spoilers)}
							control={<Checkbox />}
							label="Did this review contain spoilers?"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="secondary"
							sx={{ mt: 4, mb: 2 }}
						>
							Submit
						</Button>
					</form>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	);
};

export default ReviewEditForm;
