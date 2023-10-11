interface visibleButton {
	visibility: boolean;
	setVisibility: (visibility: boolean) => void;
}

const Exercise1 = ({ visibility, setVisibility }: visibleButton) => {
	return (
		<div style={{ marginBottom: "30px" }}>
			<button onClick={() => setVisibility(!visibility)}>
				Toggle text
			</button>
			<p
				style={{
					visibility: visibility === false ? "hidden" : "visible",
				}}
			>
				Fear is the path to the dark side.
			</p>
		</div>
	);
};

export default Exercise1;
