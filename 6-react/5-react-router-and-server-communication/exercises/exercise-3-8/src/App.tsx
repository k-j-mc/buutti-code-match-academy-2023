import { useState, useEffect } from "react";

import { getAll, create, update } from "./noteService";

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
		await getAll().then((response) => {
			setNotes(response.data);
		});
	};

	const createNewNote = async (note: INotes) => {
		await create(note).then((response) => {
			setNotes([...notes, response.data]);
		});
	};

	const toggleImportance = async (note: INotes) => {
		await update(note).then((response) => {
			setNotes(
				notes.map((obj) => (obj.id === note.id ? response.data : obj))
			);
		});
	};

	return (
		<div className="main">
			<h1 className="title">App</h1>
			<Notes
				notes={notes}
				createNewNote={createNewNote}
				toggleImportance={toggleImportance}
			/>
		</div>
	);
};

export default App;
