import React from "react";
import TrashIcon from "./TrashIcon";

//Styles
import "../styles/UserPlateList.css";

export default function UserPlateList(props) {
  const MAX_LIST_ITEMS = 3;
  const ITEM_HEIGHT = 4.0; //rem
  const props_list_array = Object.keys(props.list);
  let list_style = {};

  // Handler che gestisce l'autocancellazione del record
  function handleClick(e) {
    props.selfErase(e.target.id);
  }

  // Setta il limite di entry visibili in lista
  if (props_list_array.length >= MAX_LIST_ITEMS) {
    list_style["maxHeight"] = ITEM_HEIGHT * MAX_LIST_ITEMS + "rem";
  }

  // Crea lista con i piatti
  const list = props_list_array.map((plate) => (
    <li className="list-entry list-group-item" key={plate}>
      <div className="me-auto">
        <div className="fw-bold">{plate}</div>
        Commento
      </div>
      <span className="badge rounded-pill me-2">{props.list[plate]}</span>
      <TrashIcon id={plate} onClick={handleClick} />
    </li>
  ));

  return (
    <React.Fragment>
      {props.showList && props_list_array.length > 0 && (
        <ul className="list-group" style={list_style}>
          {list}
        </ul>
      )}
    </React.Fragment>
  );
}
