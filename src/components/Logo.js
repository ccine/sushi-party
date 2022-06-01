import React from "react";
import "../styles/App.css";
import logo from "../images/antisgamosgobbo.png";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function Logo() {
  const navigate = useNavigate();

  const logoStyle = {
    width: "25%",
    "max-width": "300px",
  };

  return (
    <Image
      src={logo}
      style={logoStyle}
      className="App-logo"
      alt="logo"
      onClick={() => navigate("/Home")}
    />
  );
}
