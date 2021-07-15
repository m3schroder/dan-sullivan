import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

import PopUp from "./common/popUp";

import "../assets/css/navbar.css";

class SubmissionForm extends Form {
  state = {
    data: {
      first: "",
      last: "",
      number: "",
      email: "",
      rooms: "",
      hallways: "",
    },
    errors: {},
  };

  schema = {
    first: Joi.string().required().label("First"),
    last: Joi.string().required().label("Last"),
    number: Joi.label("Phone number"),
    email: Joi.string().email().required().label("Email"),
    rooms: Joi.number().integer().required().label("Number of rooms"),
    hallways: Joi.number().integer().required().label("Number of hallways"),
  };

  inputs = [
    {
      id: "first",
      name: "first",
      label: "First name",
      required: true,
    },
    { id: "last", name: "last", label: "Last name", required: true },
    {
      id: "number",
      name: "number",
      label: "Phone Number",
      type: "tel",
      required: false,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      id: "rooms",
      name: "rooms",
      label: "# of rooms",
      type: "number",
      required: true,
    },
    {
      id: "hallways",
      name: "hallways",
      label: "# of hallways",
      type: "number",
      required: true,
    },
  ];

  doSubmit = () => {
    //Call server
    window.open("mailto:m3schroder@gmail.com");

    console.log("Submitted");
  };
  render() {
    const { open, popUpId, toggle } = this.props;
    return (
      <PopUp open={open} popUpId={popUpId}>
        <form onSubmit={this.handleSubmit}>
          <div id="submission-box">
            {this.inputs.map(({ name, label, type, required }) => (
              <div key={name}>
                {this.renderInput(name, label, type, required)}
              </div>
            ))}
          </div>
          {this.renderButton("Submit", toggle)}
        </form>
      </PopUp>
    );
  }
}

export default SubmissionForm;
