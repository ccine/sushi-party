import React, { useRef } from "react";
import TrashIcon from "./TrashIcon";

//Styles
import "../styles/UserPlateList.css";

export default function UserPlateList(props) {
  const MAX_LIST_ITEMS = 3;
  const props_list_array = Object.keys(props.list);
  let toggleDisappear = "";
  const listRef = useRef();

  const entryClass = "list-entry list-group-item";
  const badgeClass = "badge rounded-pill me-2";

  // Handler che gestisce l'autocancellazione del record
  function handleClick(e) {
    props.selfErase(e.target.id);
  }

  // Nasconde la lista se vuota
  if (props_list_array.length <= 0) toggleDisappear = " d-none";

  // Setta il limite di entry visibili in lista
  if (props_list_array.length >= MAX_LIST_ITEMS) {
    let max_height = listRef.current.childNodes[1].offsetHeight * MAX_LIST_ITEMS;
    listRef.current.style = "max-height: " + max_height + "px";
  }

  // Crea lista con i piatti
  const list = props_list_array.map((plate) => (
    <li className={entryClass} key={plate}>
      <div class="me-auto">
        <div class="fw-bold">{plate}</div>
        Commento
      </div>
      {/*<span className="me-auto">{plate}</span>*/}
      <span className={badgeClass}>{props.list[plate]}</span>
      <TrashIcon id={plate} onClick={handleClick} />
    </li>
  ));

  return (
    <div className={"list-container" + toggleDisappear}>
      <li className="list-header list-group-item" type="large">
        List
      </li>
      <ul ref={listRef} className={"list-group"}>
        {list}
      </ul>
    </div>
  );
}
