import React from "react";
import { Button } from "react-bootstrap";

// Styles
import "../styles/ShowUserListBtn.css";

export default function ShowUserListBtn(props: any) {
  let badge = (
    <span
      id="badge-pink"
      className="position-absolute top-0 end-0 badge rounded-pill"
    >
      {props.itemCount}
    </span>
  );

  let arrow =
    props.btnActive && props.itemCount > 0 ? (
      <i
        className="bi-caret-up-fill position-absolute translate-middle"
        style={{ top: "50%", left: "70%" }}
      />
    ) : (
      <i
        className="bi-caret-down-fill position-absolute translate-middle"
        style={{ top: "50%", left: "70%" }}
      />
    );

  return (
    <Button
      className={
        props.className +
        " position-relative d-flex justify-content-center align-items-center"
      }
      variant="pink"
      onClick={props.onClick}
    >
      List
      {arrow}
      {props.itemCount > 0 && badge}
    </Button>
  );
}
