import { CirclePopLoader } from "react-loaders-kit";

interface ILoader {
	loading: boolean;
	styleName: string;
	size: number;
}

const LoaderLargeCircle = ({ loading, styleName, size }: ILoader) => {
	const loaderProps = {
		loading: loading,
		size: size,
		color: "#00d4ff",
	};

	return (
		<div className={styleName}>
			<CirclePopLoader {...loaderProps} />
		</div>
	);
};

export default LoaderLargeCircle;
