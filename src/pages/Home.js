import React from "react";
import Logo from "../components/Logo";
import Title from "../components/Title";
import LoginForm from "../components/LoginForm";

function Home() {
  return (
    <div className="Home position-relative top-50 start-50 translate-middle" style={{"width" : "300px"}}>
      <Logo style="transform: translateY(-100%)" />
      {/*<Title text="Google Party"></Title>*/}
      <LoginForm className="form-signin w-100 position-absolute top-0 start-0"/>
    </div>
  );
}

export default Home;
