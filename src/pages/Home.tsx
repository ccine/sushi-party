import React from "react";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

function Home() {
  return (
    <div className="Home">
      <Logo className="center-origin" translateNegativeY={true} />
      <LoginForm className="form-signin center-origin w-100" />
    </div>
  );
}

export default Home;
