import { useState } from "react";

import "./Forms.css";

interface IAdd {
	addTodo: (task: string) => void;
}

const NewTodo = ({ addTodo }: IAdd) => {
	const [showForm, setShowForm] = useState<boolean>(false);
	const [newTodo, setNewTodo] = useState<string>("");

	const onSubmit = (event: any) => {
		event.preventDefault();

		addTodo(newTodo);

		setShowForm(!showForm);
		setNewTodo("");
	};

	return (
		<div className="searchBarContainer">
			{!showForm ? (
				<button
					className="newTodoButton"
					onClick={() => setShowForm(!showForm)}
				>
					+
				</button>
			) : (
				<form className="todoForm" onSubmit={onSubmit}>
					<input
						className="newTodoInput"
						placeholder="New to do..."
						value={newTodo}
						onChange={({ target }) => setNewTodo(target.value)}
					/>
					<div />
					<button className="toDoSaveButton" type="submit">
						Add Todo
					</button>
					<button
						className="toDoCancelButton"
						onClick={() => setShowForm(!showForm)}
					>
						Cancel
					</button>
				</form>
			)}
		</div>
	);
};

export default NewTodo;
