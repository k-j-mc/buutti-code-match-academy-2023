import { useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

import SearchBar from "./SearchBar";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

import "./App.css";

export interface IData {
	id: string;
	text: string;
	complete: boolean;
}

const initialData: IData[] = [
	{ id: uuid(), text: "Buy potatoes", complete: false },
	{ id: uuid(), text: "Make food", complete: false },
	{ id: uuid(), text: "Exercise", complete: false },
	{ id: uuid(), text: "Do the dishes", complete: false },
	{ id: uuid(), text: "Floss the teeth", complete: false },
	{ id: uuid(), text: "Play videogames", complete: true },
];

const App = () => {
	const [data, setData] = useState<IData[]>(initialData);
	const [searchData, setSearchData] = useState<IData[]>(data);

	const [searchQuery, setSearchQuery] = useState<string>("");

	useEffect(() => {
		if (searchQuery.length > 0) {
			setSearchData(
				data.filter((obj) =>
					obj.text.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		} else {
			setSearchData([]);
		}
	}, [searchQuery, data]);

	const handleTodo = (item: IData) => {
		setData(data.map((todo) => (item.id === todo.id ? item : todo)));
		setSearchData(
			searchData.map((todo) => (item.id === todo.id ? item : todo))
		);
	};

	const removeTodo = (item: IData) => {
		setData(data.filter((todo) => item.id !== todo.id));
		setSearchData(searchData.filter((todo) => item.id !== todo.id));
	};

	const editTodo = (item: IData) => {
		setData(data.map((todo) => (item.id === todo.id ? item : todo)));
		setSearchData(
			searchData.map((todo) => (item.id === todo.id ? item : todo))
		);
	};

	const addTodo = (task: string) => {
		setData([...data, { text: task, complete: false, id: uuid() }]);
		setSearchData([
			...searchData,
			{ text: task, complete: false, id: uuid() },
		]);
	};

	return (
		<div className="main">
			<h1 className="title">To do...</h1>
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			<NewTodo addTodo={addTodo} />

			{searchQuery.length > 0 ? (
				<TodoList
					data={searchData}
					handleTodo={handleTodo}
					removeTodo={removeTodo}
					editTodo={editTodo}
				/>
			) : (
				<TodoList
					data={data}
					handleTodo={handleTodo}
					removeTodo={removeTodo}
					editTodo={editTodo}
				/>
			)}
		</div>
	);
};

export default App;
