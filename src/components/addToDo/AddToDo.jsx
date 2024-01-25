import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddToDo.module.css";
import styled from "styled-components";

const AddToDo = ({ todo, setTodo }) => {
	const [value, setValue] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");

	function saveTodo() {
		if (value) {
			setTodo([
				...todo,
				{
					id: Math.random(),
					name: value,
					img: value2,
					nameG: value3,
					status: true,
				},
			]);
		}
		setValue("");
		setValue2("");
		setValue3("");
	}

	const StyledButton = styled.button`
		border: 2px solid black;
		color: purple;
		&:hover {
			background: green;
			color: white;
		}
	`;

	const StyledParent = styled.form`
		display: flex;
		justify-content: space-around;
		margin-top: 50px;
	`

	const StyledInput = styled.input`
		width: 150px;
		height: 50px;
		border-radius: 100px;
		border: none;
		&:hover {
			background: #ff00ff;
			color: white;

		}

		&::placeholder {
			font-weight: 900;
			color: purple;
		}
	`






	return (
		<Row>
			<Col className={s.addTodoForm}>
				<div>
					<StyledParent>
					<StyledInput
						placeholder="name movie"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<StyledInput
						placeholder="img link"
						value={value2}
						onChange={(e) => setValue2(e.target.value)}
					/>
					<StyledInput
						placeholder="genre"
						value={value3}
						onChange={(e) => setValue3(e.target.value)}
					/>
					<StyledButton onClick={saveTodo} className="btn">
						save
					</StyledButton>

					</StyledParent>
				</div>
			</Col>
		</Row>
	);
};

export default AddToDo;
