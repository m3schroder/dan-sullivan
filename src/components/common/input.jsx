import React from "react";

const Input = ({ name, label, required, error, errDropdown, ...rest }) => {
  let inputClass = "";
  if (errDropdown && error) {
    inputClass = "alert-danger";
    error = null;
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        {required && <span style={{ color: "tomato" }}> *</span>}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className={"form-control " + inputClass}
        placeholder={label}
      ></input>
      {error && <div className="alert-danger form-error">{error}</div>}
    </div>
  );
};

export default Input;
