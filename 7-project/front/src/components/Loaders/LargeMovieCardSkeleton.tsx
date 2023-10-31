import { Skeleton } from "@mui/material";

const LargeMovieCardSkeleton = () => {
	return (
		<div>
			<Skeleton
				sx={{ bgcolor: "#0E0E0E", height: "45vh", marginTop: "17px" }}
				variant="rectangular"
			/>
			<Skeleton
				sx={{ bgcolor: "#121212" }}
				variant="rectangular"
				height={170}
			/>
		</div>
	);
};

export default LargeMovieCardSkeleton;
