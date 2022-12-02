import React from "react";
import Alert from "./Alert";
import { isObjEmpty } from "./utility";
import UseForm from "./UseForm";
import Form from "./Form";
import Info from "./Info";
import "./App.css";

const App = () => {
  const { inputs, message, errors, handleChange, handleToggle, handleForm } =
    UseForm();

  return (
    <div className="container">
      <div className="row form-data">
        <Info name={message.name}/>
        <Form
          inputs={inputs}
          errors={errors}
          handleChange={handleChange}
          handleForm={handleForm}
        />
      </div>

      <div className="popup">
        {!isObjEmpty(message) && (
          <Alert message={message} handleClick={handleToggle} />
        )}
      </div>
    </div>
  );
};
export default App;
