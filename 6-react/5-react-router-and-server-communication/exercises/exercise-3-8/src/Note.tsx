import React from "react";

import { INotes } from "./App";

interface INote {
	note: INotes;
	toggleImportance: (note: INotes) => void;
}

const Note = ({ note, toggleImportance }: INote) => {
	return (
		<div
			className="note"
			style={{ backgroundColor: note.important ? "red" : "green" }}
		>
			<p className="noteText">{note.content}</p>
			<label id="noteImportanceLabel">Important?</label>

			<input
				className="noteCheck"
				type="checkbox"
				id="noteImportance"
				checked={note.important}
				onChange={({ target }) =>
					toggleImportance({ ...note, important: target.checked })
				}
			/>
		</div>
	);
};

export default Note;
