import React, { Component } from "react";
import Joi from "joi-browser";
import getNested from "../../utils/getNested";
import Input from "./input";

// Define the state, schema, and "doSubmit" inside of the parent component
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  // Button must be in the form's container
  renderButton = (label, onClick = null) => {
    return (
      <button
        onClick={onClick}
        disabled={this.validate()}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text", required, errDropdown) => {
    const { data, errors } = this.state;
    // Checks for nested properties
    const value = name.includes(".") ? getNested(data, name) : data[name];
    name = name.includes(".") ? name.split(".")[0] : name;
    return (
      <Input
        name={name}
        className="form-input"
        value={value || ""}
        label={label}
        errDropdown={errDropdown}
        type={type}
        required={required}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    error.details.map((item) => (errors[item.path[0]] = item.message));

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.setState({ data: {} });
    // <div class="vcard">
    //     <a class="url fn email org" href="YOUR vCARD URL">Add us to your contacts!</a>
    // </div>

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
}

export default Form;
