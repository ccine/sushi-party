import React from "react";
import Logo from "../components/Logo";
import Title from "../components/Title";
import { Image, Form, Button } from "react-bootstrap";
import "../styles/App.css";

function Party() {
  return (
    <div
      className="Home position-relative top-50 start-50 translate-middle"
      style={{ width: "300px" }}
    >
      <Logo style="transform: translateY(-100%)" />
      {/* <Title text="Party: XXXX"></Title>*/}
      <OrderUI className="form-signin w-100 position-absolute top-0 start-0" />
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
      <div className={this.props.className}>
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
    <React.Fragment>
      <div className="d-flex">
        <input
          id="plate"
          className="form-control form-control-lg w-50 me-1"
          type="text"
          placeholder="Plate"
          onChange={props.onInputChange}
          value={props.plate}
        />
        <input
          id="qty"
          className="form-control form-control-lg w-50"
          type="number"
          placeholder="Qty"
          onChange={props.onInputChange}
          value={props.qty}
        />
      </div>
      <Button className="mt-1 mb-1 w-100" size="lg" onClick={props.onClick}>
        add
      </Button>
    </React.Fragment>
  );
}

function UserPlateList(props) {
  let buttonClass = "mt-0";
  const list = Object.keys(props.list).map((key) => (
    <p className="list-group-item mb-0 m-auto" key={key}>
      {key}, {props.list[key]}
    </p>
  ));

  if (list.length !== 0) buttonClass = "mt-1";

  return (
    <div>
      {list}

      <Button className={buttonClass} variant="secondary" size="lg">
        Place order che non fa niente però puoi premere il logo per tornare indietro
      </Button>
    </div>
  );
}

export default Party;
