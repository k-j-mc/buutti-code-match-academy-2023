import Todo from "./Todo";
import NoResults from "./NoResults";

import { IData } from "./App";

export interface IItem {
	data: IData[];
	handleTodo: (data: IData) => void;
	removeTodo: (data: IData) => void;
	editTodo: (data: IData) => void;
}

const TodoList = ({ data, handleTodo, removeTodo, editTodo }: IItem) => {
	return (
		<div>
			{data.length > 0 ? (
				<>
					{data.map((item) => (
						<Todo
							key={item.id}
							item={item}
							handleTodo={handleTodo}
							removeTodo={removeTodo}
							editTodo={editTodo}
						/>
					))}
				</>
			) : (
				<NoResults />
			)}
		</div>
	);
};

export default TodoList;
