import React from "react";
import "./Form.css"

const Form = ({inputs,errors,handleChange,handleForm}) => {
  return (
    <div className="col-md-6">
      <form onSubmit={handleForm}>
      <div className="form-group">
        <label>
          Name:
        </label>
          <input
            type="text"
            name="name"
            className="form-control input"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        {errors.name && <span className="text-danger">
          <p>{errors.name}</p>
        </span>}
      </div>
      <div className="form-group">
        <label>
          Email:
        </label>
          <input
            type="text"
            name="email"
            className="form-control input"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        {errors.email && <span className="text-danger">
          <p>{errors.email}</p>
        </span>}
      </div>
      
      <button type="button" class="btn btn-light">Add Guests</button>
      <div className="form-group">
        <label>
          Please share anything that will help prepare for meeting:
        </label>
          <textarea
            name="additionalInfo"
            rows="3"
            className="form-control input"
            value={inputs.additionalInfo || ""}
            onChange={handleChange}
          />
      </div>
      <button type="submit" class="btn btn-primary">Schedule Event</button>
    </form>
 
    </div>
     );
};
export default Form;
