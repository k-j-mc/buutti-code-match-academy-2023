import { useState } from "react";
import { INotes } from "./App";

import NoteForm from "./NoteForm";

import Note from "./Note";

interface INoteArray {
	notes: INotes[];
	createNewNote: (notes: INotes) => void;
	toggleImportance: (notes: INotes) => void;
}

const Notes = ({ notes, createNewNote, toggleImportance }: INoteArray) => {
	const [formOpen, setFormOpen] = useState<boolean>(false);

	return (
		<div>
			<button
				className="noteSaveButton"
				onClick={() => setFormOpen(!formOpen)}
			>
				+ New note
			</button>
			{formOpen && (
				<NoteForm
					notesLength={notes.length}
					createNewNote={createNewNote}
				/>
			)}
			{notes.length > 0 ? (
				<>
					{notes.map((note) => (
						<Note
							key={note.id}
							note={note}
							toggleImportance={toggleImportance}
						/>
					))}
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Notes;
