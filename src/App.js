import logo from "./logo.png";
import { Image, Form, Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Image src={logo} width="60%" className="App-logo" alt="logo" />
      <h1>Sushi Party</h1>
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

export default App;
