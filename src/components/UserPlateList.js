import React, { useRef } from "react";
import TrashIcon from "./TrashIcon";

export default function UserPlateList(props) {
  let restict_lenght = {};
  const listRef = useRef(null);

  function handleClick(e) {
    props.selfErase(e.target.id);
  }

  if (Object.keys(props.list).length > 5) {
    restict_lenght = { "maxHeight": listRef.current.clientHeight };
  }

  const list = Object.keys(props.list).map((key) => (
    <li
      className="d-flex justify-content-end align-items-center list-group-item mb-0 m-auto w-100"
      key={key}
    >
      <span className="me-auto">{key}</span>
      <span
        className="badge rounded-pill me-2"
        style={{ backgroundColor: "orange" }}
      >
        {props.list[key]}
      </span>
      <TrashIcon id={key} onClick={handleClick} />
    </li>
  ));

  return (
    <ul ref={listRef} className="list-group overflow-auto" style={restict_lenght}>
      {list}  
    </ul>
  );
}
