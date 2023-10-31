import { Skeleton } from "@mui/material";

type TSkeletonCard = {
	height: string;
	width: string;
	borderRadius: string;
	marginTop: number;
	marginRight: number;
};

const MovieCardSkeleton = ({
	height,
	width,
	borderRadius,
	marginTop,
	marginRight,
}: TSkeletonCard) => {
	return (
		<div>
			<Skeleton
				sx={{
					bgcolor: "#0E0E0E",
					height: height,
					width: width,
					marginRight: "auto",
					mt: marginTop,
					mr: marginRight,
					borderRadius: borderRadius,
				}}
				variant="rectangular"
			/>
		</div>
	);
};

export default MovieCardSkeleton;
