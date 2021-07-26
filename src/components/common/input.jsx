import React from "react";

const Input = ({ name, label, required, error, errDropdown, ...rest }) => {
  let inputClass = error ? "form-control alert-danger" : "form-control";

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
    </div>
  );
};

export default Input;
