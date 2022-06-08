import React from "react";
import Logo from "../components/Logo";
import UserOrderUI from "../components/UserOrderUI";
import "../styles/App.css";

export default function Party() {
  return (
    <div className="Party Home d-flex flex-column align-items-center justify-content-center m-auto">
      <Logo className="center-origin" translateNegativeY={true} />
      <UserOrderUI className="form-signin center-origin" />
    </div>
  );
}
