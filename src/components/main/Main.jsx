import React, { useState } from "react";
import "./Main.css";


const Main = ({ todo }) => {
	const [todos, setTodos] = useState(todo);

	const [genre, setGenre] = useState("");

	const changeGenre = (e) => {
		setGenre(e.target.value);

		if (e.target.value === "Все") {
			setTodos(todo);
		} else {
			console.log(e.target.value);
			const filteredTodo = todo.filter((todo) => todo.nameG === e.target.value);

			setTodos(filteredTodo);
		}
	};

	return (
		<div>
			<select className="main" onChange={changeGenre} value={genre}>
				<option value="Все">Все</option>
				<option value="Комедии">Комедии</option>
				<option value="Фантастика">Фантастика</option>
				<option value="Боевики">Боевики</option>
				<option value="Ужасы">Ужасы</option>
				<option value="Аниме">Аниме</option>
			</select>
			<div className="parent">
				{todos.map((item) => {
					return (
						<div className="text" key={item.id}>
							<p className="text_name"> {item.name}</p>

							<img src={item.img} alt="#" />
							<p>{item.nameG}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Main;
