import React from "react";
import { IGroup } from "./App";

interface IProps {
	button: IGroup;
	hideButton: (button: IGroup) => void;
}

const Assignment2 = ({ button, hideButton }: IProps) => {
	return (
		<button
			style={{
				visibility: button.value === false ? "hidden" : "visible",
			}}
			onClick={() => hideButton({ ...button, value: !button.value })}
		>
			Button {button.id + 1}
		</button>
	);
};

export default Assignment2;
