import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

export default function Menu(props: any) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const list = Object.keys(props.list).map((plate) => (
		<li className="list-entry list-group-item" key={plate}>
			<div className="me-auto">{plate}</div>
			<span className="badge rounded-pill me-2">{props.list[plate]}</span>
		</li>
	));

	return (
		<>
			<Button variant="secondary" onClick={handleShow} {...props}>
				Ordered
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{list && list.length > 0 ? "Lista:" : "No tengo dinero"}
					{list && list.length > 0 && <ul className="list-group mb-1">{list}</ul>}
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}
