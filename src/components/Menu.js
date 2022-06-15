import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

export default function Menu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} {...props}>
        wow
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Palesemente copiata da react-bootstrap</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
