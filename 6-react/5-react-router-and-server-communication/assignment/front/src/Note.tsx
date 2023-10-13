import React from "react";

import { INotes } from "./App";

interface INote {
	note: INotes;
	toggleImportance: (note: INotes) => void;
	deleteNotebyId: (note: INotes) => void;
}

const Note = ({ note, toggleImportance, deleteNotebyId }: INote) => {
	return (
		<div
			className="note"
			style={{ backgroundColor: note.important ? "red" : "green" }}
		>
			<p className="noteText">{note.content}</p>
			<label id={`noteImportanceLabel${note.id}`}>
				Important?
				<input
					className="noteCheck"
					type="checkbox"
					id={`noteImportance${note.id}`}
					checked={note.important}
					onChange={({ target }) =>
						toggleImportance({ ...note, important: target.checked })
					}
				/>
			</label>

			<button
				className="noteDelete"
				id={`noteDelete${note.id}`}
				onClick={() => deleteNotebyId(note)}
			>
				X
			</button>
		</div>
	);
};

export default Note;
