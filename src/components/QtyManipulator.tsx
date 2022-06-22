import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function QtyManipulator(props: any) {
  return (
    <InputGroup className={props.className}>
      <InputGroup.Text as="button" onClick={props.onDecrement}>
        -
      </InputGroup.Text>
      <FormControl className="pe-none text-center" as="label">
        {props.displayQty}
      </FormControl>
      <InputGroup.Text as="button" onClick={props.onIncrement}>
        +
      </InputGroup.Text>
    </InputGroup>
  );
}
