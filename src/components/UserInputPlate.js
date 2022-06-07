import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

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
          className="form-control form-control-lg w-50 me-1"
          placeholder="Plate"
          value={plate}
          onChange={handlePlateChange}
        />
        <input
          className="form-control form-control-lg w-50"
          type={"number"}
          placeholder="Qty"
          value={qty}
          onChange={handleQtyChange}
        />
      </div>
      <Button className="mt-1 mb-1 w-100" size="lg" onClick={sendPlate}>
        Add
      </Button>
    </React.Fragment>
  );
}
