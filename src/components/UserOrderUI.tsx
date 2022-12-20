import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UserPlateList from "./UserPlateList";
import UserInputPlate from "./UserInputPlate";
import Menu from "./Menu";

export default function UserOrderUI(props: { className: string | undefined }) {
	const [plateList, setPlateList] = useState({});
	const [toggleUserList, setToggleUserList] = useState(true);

	localStorage.clear();

	function handleAddPlate(plate: string | number, qty: number) {
		let current_plate_list: { [plate: string]: number } = { ...plateList };

		current_plate_list[plate] !== undefined
			? (current_plate_list[plate] += qty)
			: (current_plate_list[plate] = qty);

		setPlateList(current_plate_list);
	}

	function handleSelfErase(id: string | number) {
		if (plateList.hasOwnProperty(id)) {
			let current_plate_list: { [plate: string]: number } = { ...plateList };

			delete current_plate_list[id];
			setPlateList(current_plate_list);
		}
	}

	function InvertToggleList() {
		setToggleUserList(!toggleUserList);
	}

	return (
		<>
			<div className={props.className}>
				<UserInputPlate
					getPlate={handleAddPlate}
					onListBtnClick={InvertToggleList}
					itemCount={Object.keys(plateList).length}
					btnActive={toggleUserList}
				/>
				<UserPlateList
					list={plateList}
					selfErase={handleSelfErase}
					showList={toggleUserList}
				/>
				<Button className="w-100 mb-1" variant="secondary" onClick={() => setPlateList({})}>
					Place order
				</Button>
				<Menu className="h-auto w-auto"></Menu>
			</div>
		</>
	);
}
