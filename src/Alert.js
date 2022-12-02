import React from "react";
import "./Alert.css";

const Alert = ({ message, handleClick }) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show col-md-6 offset-md-3"
      role="alert"
    >
      <div className="alert-heading">
        <h4>Details entered are:-</h4>
        <p><b>Name:</b>{message.name}</p>
        <p><b>Email:</b>{message.email}</p>
        {message.additionalInfo && <p><b>Additinal Information:</b>{message.additionalInfo}</p>}
      </div>
      <button
        type="button"
        className="btn-close"
        onClick={handleClick}
      ></button>
    </div>
  );
};
export default Alert;
