import { IGroup2 } from "./App";

interface IProps {
	name: IGroup2;
	changeColor: (name: IGroup2) => void;
}

const Assignment3 = ({ name, changeColor }: IProps) => {
	return (
		<div>
			<div
				className="box"
				style={{ backgroundColor: name.value }}
				onClick={() =>
					changeColor({ ...name, value: "rgb(96, 203, 69)" })
				}
			>
				<p className="boxText">{name.name}</p>
			</div>
		</div>
	);
};

export default Assignment3;
