import { Divider, Stack } from "@mui/material";
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
			<Divider />
			<Stack
				style={{
					backgroundColor: "#121212",
					margin: "15px 0 0 30px",
					paddingBottom: "15px",
					height: "50px",
				}}
			>
				<PulseBubbleLoader {...loaderProps} />
			</Stack>
			<Divider />
		</div>
	);
};

export default ListSkeleton;
