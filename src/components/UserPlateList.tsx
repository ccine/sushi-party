import React, { CSSProperties } from "react";
import TrashIcon from "./TrashIcon";

//Styles
import "../styles/UserPlateList.css";

export default function UserPlateList(props: any) {
	const MAX_LIST_ITEMS = 3;
	const ITEM_HEIGHT = 4.0; //rem
	const props_list_array = Object.keys(props.list);
	let styles_list: CSSProperties = {};

	// Handler che gestisce l'autocancellazione del record
	function handleClick(e: any) {
		props.selfErase(e.target.id);
	}

	// Setta il limite di entry visibili in lista
	if (props_list_array.length >= MAX_LIST_ITEMS) {
		styles_list.maxHeight = ITEM_HEIGHT * MAX_LIST_ITEMS + "rem";
	}

	// Crea lista con i piatti
	const list = props_list_array.map((plate) => (
		<li className="list-entry list-group-item" key={plate}>
			<div className="me-auto">
				<div className="fw-bold">{plate}</div>
			</div>
			<span className="badge rounded-pill me-2">{props.list[plate]}</span>
			<i className="bi-trash3" style={{ color: "red" }} id={plate} onClick={handleClick} />
		</li>
	));

	return (
		<>
			{props.showList && props_list_array.length > 0 && (
				<ul className="list-group mb-1" style={styles_list}>
					{list}
				</ul>
			)}
		</>
	);
}
