import { useState } from "react";

import { IData } from "./App";

import "./Todo.css";

export interface IItem {
	item: IData;
	handleTodo: (item: IData) => void;
	removeTodo: (item: IData) => void;
	editTodo: (item: IData) => void;
}

const Todo = ({ item, handleTodo, removeTodo, editTodo }: IItem) => {
	const [edit, setEdit] = useState<boolean>(false);

	const [newText, setNewText] = useState<string>("");

	return (
		<div
			className="toDo"
			style={{
				backgroundColor: item.complete
					? "rgba(81, 243, 81, 0.52)"
					: "rgba(242, 161, 161, 0.622)",
			}}
		>
			<input
				type="checkbox"
				className="toDoCheck"
				defaultChecked={item.complete}
				onClick={() =>
					handleTodo({ ...item, complete: !item.complete })
				}
			/>

			{edit ? (
				<>
					<input
						className="toDoEditText"
						placeholder="New Todo text..."
						value={newText}
						onChange={({ target }) => setNewText(target.value)}
					/>
					<button
						className="toDoEdit"
						onClick={() => {
							setEdit(!edit);
							editTodo({ ...item, text: newText });
							setNewText("");
						}}
					>
						Save
					</button>
				</>
			) : (
				<>
					<p className="toDoText">{item.text}</p>

					<button
						className="toDoEdit"
						onClick={() => {
							setEdit(!edit);
						}}
					>
						Edit
					</button>
				</>
			)}

			<button
				className="toDoDelete"
				onClick={() =>
					removeTodo({ ...item, complete: !item.complete })
				}
			>
				X
			</button>
		</div>
	);
};

export default Todo;
