import React from "react";
import logo from "../antisgamosgobbo.png";
import { Image, Form, Button } from "react-bootstrap";
import "../App.css";
import "../custom.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Image
        src={logo}
        width="15%"
        className="App-logo"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <h1>Google Party</h1>
      <div className="form-signin">
        <Form>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control
              size="lg"
              className="mb-1"
              type="email"
              placeholder="Nickname"
            />
            <Form.Control size="lg" type="password" placeholder="Party code" />
          </Form.Group>
          <Button
            className="mb-1 w-100"
            variant="primary"
            size="lg"
            type="submit"
          >
            Join Party
          </Button>
        </Form>
        <Button className="w-100" variant="secondary" size="lg" type="submit" onClick={() => navigate('/Party')}>
          Create Party
        </Button>
      </div>
    </div>
  );
}

export default Home;
