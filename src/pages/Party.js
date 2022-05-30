import React from 'react';
import logo from "../logo.png";
import { Image, Form, Button } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Party() {
const navigate = useNavigate();

    return (
      <div className="Develop">
      <Image src={logo} width="15%" className="App-logo" alt="logo" onClick={() => navigate('/')}/>
        <h1>Nothing to see shoo!</h1>
      </div>
    );
  }
  
export default Party;