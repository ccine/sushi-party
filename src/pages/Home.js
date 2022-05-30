import React from "react";
import logo from "../antisgamosgobbo.png";
import { Image, Form, Button } from "react-bootstrap";
import "../App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Develop">
    <Image src={logo} width="15%" className="App-logo" alt="logo" onClick={() => navigate('/')}/>
      <h1>Google Party</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Join Party
        </Button>
      </Form>
      <Button variant="danger" type="submit">Create Party</Button>
    </div>
  );
}

export default Home;
