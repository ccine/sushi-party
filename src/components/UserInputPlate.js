import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ShowUserListBtn from "./ShowUserListBtn";

export default function UserInputPlate(props) {
  const [plate, setPlate] = useState("");
  const [qty, setQty] = useState(1);

  function handlePlateChange(e) {
    const reg = /^\d+$/;
    if (reg.test(e.target.value)) setPlate(e.target.value);
  }

  function handleQtyChange(e) {
    const reg = /^\d+$/;
    if (reg.test(e.target.value)) setQty(e.target.value);
  }

  function sendPlate(e) {
    if (plate === "" || qty <= 0) return;

    props.getPlate(plate, qty);
    setPlate("");
    setQty(1);
    e.target.blur();
  }

  return (
    <React.Fragment>
      <div className="d-flex">
        <input
          className="form-control w-50 me-1"
          type={"number"}
          placeholder="Plate"
          value={plate}
          onChange={handlePlateChange}
        />
        <input
          className="form-control w-50"
          type={"number"}
          placeholder="Qty"
          value={qty}
          onChange={handleQtyChange}
        />
      </div>
      <div className="d-flex w-100 mt-1 mb-1">
        <Button className="me-1 w-50" onClick={sendPlate}>
          Add
        </Button>
        <ShowUserListBtn className="w-50" itemCount={props.itemCount} onClick={props.onListBtnClick} btnActive={props.btnActive} > </ShowUserListBtn>
      </div>
    </React.Fragment>
  );
}
