import React from "react";
import Logo from "../components/Logo";
import Title from "../components/Title";
import { Image, Form, Button } from "react-bootstrap";
import "../styles/App.css";

function Party() {

  return (
    <div>
      <Logo />
      <Title text="Party: XXXX"></Title>
      <OrderUI />
    </div>
  );
}

class OrderUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_plate_list: {}, plate: "", qty: "" };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddButton() {
    let plate_list = this.state.user_plate_list;

    plate_list[this.state.plate] === undefined
      ? (plate_list[this.state.plate] = parseInt(this.state.qty))
      : (plate_list[this.state.plate] += parseInt(this.state.qty));

    this.setState({ user_plate_list: plate_list, plate: "", qty: "" });
  }

  handleChange(e) {
    if (e.target.id === "plate") this.setState({ plate: e.target.value });
    if (e.target.id === "qty") this.setState({ qty: e.target.value });
  }

  render() {
    return (
      <div>
        <InputPlate
          onClick={this.handleAddButton}
          onInputChange={this.handleChange}
          plate={this.state.plate}
          qty={this.state.qty}
        />
        <UserPlateList list={this.state.user_plate_list} />
      </div>
    );
  }
}

function InputPlate(props) {
  return (
    <div>
      <input
        id="plate"
        className="form-control form-control-lg w-25 m-auto mb-1"
        type="text"
        placeholder="Plate"
        onChange={props.onInputChange}
        value={props.plate}
      />
      <input
        id="qty"
        className="form-control form-control-lg w-25 m-auto mb-1"
        type="number"
        placeholder="Qty"
        onChange={props.onInputChange}
        value={props.qty}
      />
      <Button className="w-25 mb-1" size="lg" onClick={props.onClick}>
        add
      </Button>
    </div>
  );
}

function UserPlateList(props) {
  const list = Object.keys(props.list).map((key) => (
    <p className="list-group-item mb-0 w-25 m-auto" key={key}>
      {key}, {props.list[key]}
    </p>
  ));

  return (
    <div>
      {list}
      <Button className="mt-0 w-25" variant="secondary" size="lg">
        Place order che non fa niente
      </Button>
    </div>
  );
}

export default Party;
