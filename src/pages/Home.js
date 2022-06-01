import React from "react";
import Logo from "../components/Logo";
import Title from "../components/Title";
import {  Form, Button } from "react-bootstrap";
import "../styles/App.css";
import "../styles/custom.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Logo />
      <Title text="Google Party"></Title>
      <LoginForm />
    </div>
  );
}

export default Home;

function LoginForm() {
  const navigate = useNavigate();

  return (
    <div id="login-form" className="form-signin">
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
      <Button
        className="w-100"
        variant="secondary"
        size="lg"
        type="submit"
        onClick={() => navigate("/party")}
      >
        Create Party
      </Button>
    </div>
  );
}
