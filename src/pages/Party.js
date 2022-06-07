import React from "react";
import Logo from "../components/Logo";
import UserOrderUI from "../components/UserOrderUI";
import Title from "../components/Title";
import "../styles/App.css";

export default function Party() {
  return (
    <div
      className="Home position-relative top-50 start-50 translate-middle"
      style={{ width: "300px" }}
    >
      <Logo style={{ transform: "translateY(-100%)", width : "300px" }} />
      {/* <Title text="Party: XXXX"></Title>*/}
      <UserOrderUI className="form-signin w-100 position-absolute top-0 start-0" />
    </div>
  );
}
