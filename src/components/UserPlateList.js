import React from "react";
import TrashIcon from "./TrashIcon";

export default function UserPlateList(props) {
  function handleClick(e) {
    props.selfErase(e.target.id);
  }

  const list = Object.keys(props.list).map((key) => (
    <p
      className="d-flex justify-content-end align-items-center list-group-item mb-0 m-auto w-100"
      key={key}
    >
      <span className="me-auto">{key}</span>
      <span
        className="badge rounded-pill me-2"
        style={{ "background-color": "orange" }}
      >
        {props.list[key]}
      </span>
      <TrashIcon id={key} onClick={handleClick} />
    </p>
  ));

  return <ul className="list-group">{list}</ul>;
}
