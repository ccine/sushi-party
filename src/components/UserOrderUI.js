import React from "react";
import { useState } from "react";
import UserPlateList from "./UserPlateList";
import UserInputPlate from "./UserInputPlate";

export default function UserOrderUI(props) {
  const [plateList, setPlateList] = useState({});
  const [toggleUserList, setToggleUserList] = useState(false);

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

  function InvertToggleList() {
    setToggleUserList(!toggleUserList);
  }

  return (
    <div className={props.className}>
      <div className="d-flex flex-wrap w-100 align-items-center justify-content-between">
        <UserInputPlate
          getPlate={handleGetPlate}
          onListBtnClick={InvertToggleList}
          itemCount={Object.keys(plateList).length}
          btnActive={toggleUserList}
        />
      </div>
      <UserPlateList
        list={plateList}
        selfErase={handleSelfErase}
        showList={toggleUserList}
      />
    </div>
  );
}
