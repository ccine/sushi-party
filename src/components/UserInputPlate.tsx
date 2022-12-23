import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import QtyManipulator from "./QtyManipulator";
import ShowUserListBtn from "./ShowUserListBtn";

export default function UserInputPlate(props: {
	getPlate: (plate: string | number, qty: number) => void;
	itemCount: any;
	onListBtnClick: any;
	btnActive: any;
}) {
	const [plate, setPlate] = useState("");
	const [qty, setQty] = useState(1);

	function handlePlateChange(e: any) {
		/*TODO sistema quando non è presente nessun valore scrive anche lettere
    comportamento boh*/
		const reg = /^\d+$/;
		if (reg.test(e.target.value)) setPlate(e.target.value);
	}

	function decrQty() {
		if (qty > 1) setQty(qty - 1);
	}

	function incrQty() {
		setQty(qty + 1);
	}

	function sendPlate(e: any) {
		if (plate === "" || qty <= 0) return;

		props.getPlate(plate, qty);
		setPlate("");
		setQty(1);
		e.target.blur();
	}

	return (
		<>
			<div className="d-flex">
				<input
					className="form-control w-50 me-1"
					type="number"
					placeholder="Plate"
					value={plate}
					onChange={handlePlateChange}
				/>
				<QtyManipulator
					className="w-50"
					onIncrement={incrQty}
					onDecrement={decrQty}
					displayQty={qty}
				/>
			</div>
			<div className="d-flex w-100 mt-1 mb-1">
				<Button className="me-1 w-50" onClick={sendPlate}>
					Add
				</Button>
				<ShowUserListBtn
					className="w-50"
					itemCount={props.itemCount}
					onClick={props.onListBtnClick}
					btnActive={props.btnActive}
				/>
			</div>
		</>
	);
}
