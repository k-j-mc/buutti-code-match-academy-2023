import { useState, useEffect } from "react";

import { getAll, create, update, deleteNote } from "./noteService";

import Notes from "./Notes";

export interface INotes {
	id: number;
	content: string;
	date: string;
	important: boolean;
}

const App = () => {
	useEffect(() => {
		fetchNotes();
	}, []);

	const [notes, setNotes] = useState<INotes[]>([]);

	const fetchNotes = async () => {
		getAll().then((response) => {
			setNotes(response.data);
		});
	};

	const createNewNote = async (note: INotes) => {
		create(note).then((response) => {
			setNotes([...notes, response.data]);
		});
	};

	const toggleImportance = (note: INotes) => {
		update(note).then((response) => {
			setNotes(
				notes.map((obj) => (obj.id === note.id ? response.data : obj))
			);
		});
	};
	const deleteNotebyId = (note: INotes) => {
		deleteNote(note).then((response) => {
			setNotes(notes.filter((obj) => obj.id !== note.id));
		});
	};

	return (
		<div className="main">
			<h1 className="title">App</h1>
			<Notes
				notes={notes}
				createNewNote={createNewNote}
				toggleImportance={toggleImportance}
				deleteNotebyId={deleteNotebyId}
			/>
		</div>
	);
};

export default App;
