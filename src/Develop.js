import React from 'react';
import logo from "./antisgamosgobbo.png";
import { Image, Form, Button } from "react-bootstrap";
import "./App.css";

function Develop() {
    return (
      <div className="Develop">
        <Image src={logo} width="15%" className="App-logo" alt="logo" />
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
  
export default Develop;