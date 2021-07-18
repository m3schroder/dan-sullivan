import React from "react";

const Input = ({ name, label, required, error, errDropdown, ...rest }) => {
  let inputClass = "form-control";
  if (errDropdown) {
    console.log("Working");
    if (!error) {
      inputClass = "";
    } else {
      inputClass += "alert-danger";
      error = null;
    }
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
        className={inputClass}
        placeholder={label}
      ></input>
      {error && <div className="alert-danger form-error">{error}</div>}
    </div>
  );
};

export default Input;
