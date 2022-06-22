import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { gql, useLazyQuery } from "@apollo/client";

// Styles
import "../styles/App.css";
import "../styles/custom.scss";

export default function LoginForm(props: any) {
  const navigate = useNavigate();

  const ENTERPARTY = gql`
    query Party($username: String!, $party: String!) {
      enterParty(username: $username, party_code: $party)
    }
  `;

  const [enterParty, { loading, error, data }] = useLazyQuery(ENTERPARTY);

  return (
    <div id="login-form" {...props}>
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
        onClick={() =>
          enterParty({
            variables: { username: "bulldog", party: "party1" },
          }).then((res) => {
            if (res.data.enterParty) {
              navigate("/party");
            }
          })
        }
      >
        Create Party
      </Button>
    </div>
  );
}
