import React from "react";

export default function TrashIcon(props) {
  return <i className="bi-trash3" style={{ color: "red" }} id={props.id} onClick={props.onClick} />;
}
