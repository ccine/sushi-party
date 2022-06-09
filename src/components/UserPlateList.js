import React, { useRef } from "react";
import TrashIcon from "./TrashIcon";

//Styles
import "../styles/UserPlateList.css";

export default function UserPlateList(props) {
  const MAX_LIST_ITEMS = 3;
  const ITEM_HEIGHT = 4.0; //rem
  const props_list_array = Object.keys(props.list);
  const listRef = useRef();

  // Handler che gestisce l'autocancellazione del record
  function handleClick(e) {
    props.selfErase(e.target.id);
  }

  // Setta il limite di entry visibili in lista
  if (props_list_array.length >= MAX_LIST_ITEMS) {
    let max_height = ITEM_HEIGHT * MAX_LIST_ITEMS;
    listRef.current.style = "max-height: " + max_height + "rem";
  }

  // Crea lista con i piatti
  const list = props_list_array.map((plate) => (
    <li className={"list-entry list-group-item"} key={plate}>
      <div className="me-auto">
        <div className="fw-bold">{plate}</div>
        Commento
      </div>
      <span className={"badge rounded-pill me-2"}>{props.list[plate]}</span>
      <TrashIcon id={plate} onClick={handleClick} />
    </li>
  ));

  // Nasconde la lista se vuota o !showList
  let ulClass =
    props_list_array.length <= 0 || props.showList === false
      ? "list-group d-none"
      : "list-group d-flex";

  return (
    <ul ref={listRef} className={ulClass}>
      {list}
    </ul>
  );
}
