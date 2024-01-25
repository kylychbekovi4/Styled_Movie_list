import React from "react";
import s from "./Header.module.css";
import { Col, Row } from "react-bootstrap";

const Header = () => {
	return (
		<Row>
			<Col>
				<div className={s.root}>
					<h1 className={s.header_title}>Cinema Search</h1>
				</div>
			</Col>
		</Row>
	);
};

export default Header;
