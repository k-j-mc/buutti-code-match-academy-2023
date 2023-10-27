import React from "react";

import { Grid } from "@mui/material";

const MovieCast = () => {
	return (
		<Grid container spacing={1}>
			<Grid
				item
				xs={12}
				margin={{ xs: "0 4.166666666666666% 0 4.166666666666666%" }}
			>
				<h2
					className="headerPageInfo"
					style={{ display: "inline-block" }}
				>
					Top Cast
				</h2>
			</Grid>
		</Grid>
	);
};

export default MovieCast;
