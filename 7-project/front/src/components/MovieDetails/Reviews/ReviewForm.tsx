import { useState, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { createReview } from "../../../reducers/reviewReducer";

import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Rating,
	TextField,
} from "@mui/material";

type TReviewForm = {
	setReviewFormActive: Function;
};

const ReviewForm = ({ setReviewFormActive }: TReviewForm) => {
	const dispatch = useAppDispatch();

	const { movie } = useAppSelector((state) => state.movies);
	const { user } = useAppSelector((state) => state.user);

	const [title, setTitle] = useState<string>("");
	const [review, setReview] = useState<string>("");
	const [rating, setRating] = useState<number | null>(0);
	const [spoilers, setSpoilers] = useState<boolean>(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		let userId;

		if (!user) {
			userId = "";
		} else {
			userId = user.id;
		}

		const reviewObject = {
			movie_id: movie[0].id,
			title: title,
			review: review,
			rating: rating,
			spoilers: spoilers,
			user_id: userId,
			likes: 0,
			dislikes: 0,
		};

		dispatch(createReview(reviewObject));

		setTitle("");
		setReview("");
		setRating(0);
		setSpoilers(false);

		setReviewFormActive(false);
	};

	return (
		<div>
			<Grid
				container
				spacing={1}
				style={{ minHeight: "800px", paddingBottom: "30px" }}
			>
				<Grid item xs={2} />
				<Grid item xs={8}>
					<h2 className="headerPageInfo">What did you think?</h2>
					<h4
						className="headerPageInfo"
						style={{ fontStyle: "italic" }}
					>
						Leave a full review or just give a rating!
					</h4>

					<h4 style={{ marginTop: "35px" }}>
						How many stars out of 10 for {movie[0].title}?
					</h4>
					<form onSubmit={handleSubmit}>
						<Rating
							name="simple-controlled"
							value={rating}
							onChange={(event, newValue) => {
								setRating(newValue);
							}}
							defaultValue={0}
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
							value={review}
							onChange={({ target }) => setReview(target.value)}
							sx={{ mt: 4, mb: 4, whiteSpace: "pre-line" }}
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
							sx={{ mt: 4 }}
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

export default ReviewForm;
