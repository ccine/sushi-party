import React from "react";
import { useState } from "react";
import UserPlateList from "./UserPlateList";
import UserInputPlate from "./UserInputPlate";

export default function UserOrderUI(props) {
  const [plateList, setPlateList] = useState({});

  function handleGetPlate(plate, qty) {
    let current_plate_list = {};
    Object.assign(current_plate_list, plateList);

    current_plate_list[plate] !== undefined
      ? (current_plate_list[plate] += parseInt(qty))
      : (current_plate_list[plate] = parseInt(qty));

    setPlateList(current_plate_list);
  }

  function handleSelfErase(id) {
    if (plateList.hasOwnProperty(id)) {
      let current_plate_list = { ...plateList };

      delete current_plate_list[id];
      setPlateList(current_plate_list);
    }
  }

  return (
    <div className={props.className}>
      <UserInputPlate getPlate={handleGetPlate} />
      <UserPlateList list={plateList} selfErase={handleSelfErase} />
    </div>
  );
}
