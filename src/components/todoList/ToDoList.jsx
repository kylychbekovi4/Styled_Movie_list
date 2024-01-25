import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./ToDoList.module.css";

const TodoList = ({ todo, setTodo }) => {
	const [edit, setEdit] = useState(null);
	const [value, setValue] = useState("");
	const [nameG,setNameG] = useState('')
	function deleteTodo(id) {
		let newTodo = [...todo].filter((item) => item.id != id);
		setTodo(newTodo);
	}
	function editTodo(id, title ,nameG) {
		setEdit(id);
		setValue(title);
		setNameG(nameG);
	}
	function saveTodo(id) {
		let newTodo = [...todo].map((item) => {
			if (item.id == id) {
				item.title = value;
			}
			return item;
		});
		setTodo(newTodo);
		setEdit(null);
	}
	return (
		<div className={s.father}>
			{/* {todo.map((item) => (
				<div key={item.id} className={s.list}>
					{edit == item.id ? (
						<div>
							<input value={value} onChange={(e) => setValue(e.target.value)} />
						</div>
					) : (
						<div>
							<h1 className={s.h1}>{item.title}</h1>
						</div>
					)}
					{edit == item.id ? (
						<div>
							<Button onClick={() => saveTodo(item.id)}>save</Button>
						</div>
					) : (
						<div>
							<img src={item.img} alt="" />
							<div className={s.card_btn}>
								<Button onClick={() => deleteTodo(item.id)}>delete</Button>
								<Button
									onClick={() => editTodo(item.id, item.title)}
									className={s.btn}>
									edit
								</Button>
							</div>
						</div>
					)}
				</div>
			))} */}
		</div>
	);
};
export default TodoList;
