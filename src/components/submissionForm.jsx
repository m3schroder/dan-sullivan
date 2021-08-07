import React from "react";
import Joi from "joi-browser";
import emailjs from "emailjs-com";

import CloseButton from "./common/closeButton";
import PopUp from "./common/popUp";
import Form from "./common/form";

import createContactCard from "../utils/createContact";

import "../assets/css/navbar.css";

class SubmissionForm extends Form {
  state = {
    data: {
      first: "Matt",
      last: "Schroder",
      number: "615-663-5650",
      email: "m3schroder@gmail.com",
      rooms: "2",
      hallways: "3",
    },
    errors: {},
  };

  schema = {
    first: Joi.string().required().label("First name"),
    last: Joi.string().required().label("Last name"),
    number: Joi.string()
      .regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
      .required()
      .label("Phone number"),
    email: Joi.string().email().required().label("Email"),
    rooms: Joi.number().integer().required().label("Number of rooms"),
    hallways: Joi.number().integer().required().label("Number of hallways"),
    message: Joi.label("Message"),
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
      required: true,
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
      label: "Rooms",
      type: "number",
      required: true,
    },
    {
      id: "hallways",
      name: "hallways",
      label: "Hallways",
      type: "number",
      required: true,
    },
  ];

  doSubmit = (e) => {
    e.preventDefault();
    let { first, last, email, number, rooms, hallways } = e.target;
    let contactCard = createContactCard(
      first.value,
      last.value,
      email.value,
      number.value
    );
    var base64 = btoa(contactCard);
    emailjs
      .send(
        "service_8xdwyfp",
        "template_3zgcky8",
        {
          first: first.value,
          last: last.value,
          rooms: rooms.value,
          hallways: hallways.value,
          email: email.value,
          number: number.value,
          content: base64,
        },
        "user_IW2ooKqhMLZoZM5ipPIyj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  render() {
    const { open, popUpId, toggle, errDropdown } = this.props;
    return (
      <PopUp open={open} className="popup-box" id={popUpId}>
        <CloseButton onClose={toggle} />
        <div style={{ padding: "5%" }}>
          <form onSubmit={this.doSubmit}>
            <div id="submission-box">
              {this.inputs.map(({ name, label, type, required }) => (
                <div key={name} id={name}>
                  {this.renderInput(name, label, type, required, errDropdown)}
                </div>
              ))}
            </div>
            {this.renderButton("Submit", toggle)}
          </form>
        </div>
      </PopUp>
    );
  }
}

export default SubmissionForm;
