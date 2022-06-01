import React from "react";
import Logo from "../components/Logo";
import Title from "../components/Title";
import LoginForm from "../components/LoginForm";

function Home() {
  return (
    <div className="Home d-flex flex-column vh-100 align-item-center justify-content-center">
      <Logo className="w-100 mx-auto" />
      {/*<Title text="Google Party"></Title>*/}
      <LoginForm />
    </div>
  );
}

export default Home;
