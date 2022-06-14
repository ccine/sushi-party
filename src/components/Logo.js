import React from "react";
import logo from "../images/antisgamosgobbo.png";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function Logo(props) {
  const navigate = useNavigate();
  let style = props.style ? { ...props.style } : {};

  if (props.translateNegativeY === true) style["transform"] = "translateY(-100%)";

  return (
    <Image
      src={logo}
      className={"logo " + props.className}
      style={style}
      alt="logo"
      onClick={() => navigate("/Home")}
    />
  );
}
