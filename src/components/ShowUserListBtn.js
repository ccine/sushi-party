import React from "react";
import { Button } from "react-bootstrap";

// Styles
import "../styles/ShowUserListBtn.css";

export default function ShowUserListBtn(props) {
  const btnClass = props.className;
  let badge;

  if (props.itemCount && props.itemCount > 0) {
    badge = (
      <span
        id="badge-pink"
        className="position-absolute top-0 end-0 badge rounded-pill"
      >
        {props.itemCount}
      </span>
    );
  }

  let arrow = props.btnActive ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-up-fill ms-2"
      viewBox="0 0 16 16"
    >
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-down-fill ms-2"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );

  return (
    <Button
      className={btnClass + " position-relative d-flex justify-content-center align-items-center"}
      variant="pink"
      onClick={props.onClick}
    >
      List
      {arrow}
      {badge}
    </Button>
  );
}
