import { useState } from "react";

import { INotes } from "./App";

type TNoteForm = {
	notesLength: number;
	createNewNote: (newNote: INotes) => void;
};

const NoteForm = ({ notesLength, createNewNote }: TNoteForm) => {
	const [noteText, setNoteText] = useState<string>("");
	const [noteImportance, setNoteImportance] = useState<boolean>(false);

	const resetForm = () => {
		setNoteText("");
		setNoteImportance(false);
	};

	const submitForm = (event: any) => {
		event.preventDefault();

		const newNote: INotes = {
			id: ++notesLength,
			content: noteText,
			date: new Date().toISOString(),
			important: noteImportance,
		};

		createNewNote(newNote);

		resetForm();
	};

	return (
		<form className="noteForm" onSubmit={submitForm}>
			<input
				value={noteText}
				className="newNoteInput"
				type="text"
				id="noteText"
				placeholder="Note content..."
				onChange={({ target }) => setNoteText(target.value)}
			/>
			<div />
			<label id="noteImportanceLabel">Important?</label>

			<input
				checked={noteImportance}
				type="checkbox"
				id="noteImportance"
				onChange={({ target }) => setNoteImportance(target.checked)}
			/>
			<button className="noteSaveButton" type="submit" id="noteSubmit">
				submit
			</button>
		</form>
	);
};

export default NoteForm;
