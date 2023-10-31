import React from "react";
import { Stack } from "@mui/material";
import { PulseBubbleLoader } from "react-loaders-kit";

interface ILoader {
	loading: boolean;
}

const ListSkeleton = ({ loading }: ILoader) => {
	const loaderProps = {
		loading: loading,
		colors: ["#A2A2A2", "#A4A4A4", "#A6A6A6"],
		size: 50,
	};

	return (
		<div>
			<Stack
				style={{
					backgroundColor: "#121212",
					margin: "10px 0 10px 30px",
					height: "50px",
				}}
			>
				<PulseBubbleLoader {...loaderProps} />
			</Stack>
		</div>
	);
};

export default ListSkeleton;
