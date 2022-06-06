import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// Styles
import "../styles/App.css";
import "../styles/custom.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export default function LoginForm(props) {
  const navigate = useNavigate();

  return (
    <div id="login-form" className={props.className}>
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
