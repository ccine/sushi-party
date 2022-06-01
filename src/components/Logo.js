import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function Logo(props) {
  const navigate = useNavigate();

  return (
    <Image
      src={logo}
      className={"logo " + props.className}
      Style={props.style}
      alt="logo"
      onClick={() => navigate("/Home")}
    />
  );
}
