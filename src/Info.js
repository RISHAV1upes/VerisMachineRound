import React from "react";
import "./Info.css"

const Info = ({name}) => {
  return (
    <div className="info col-md-6">
      <p className="name">Hello, {name}</p>
      <h1>15 Minute Meeting</h1>
      <p>
      <i class="icon fa fa-clock-o"></i>
        15 min
      </p>
      <p>
      <i class="icon fa fa-calendar"></i>
        9:30am - 9:45am ,Friday ,September 16, 2022</p>
      <p>
      <i class="icon fa fa-globe"></i>
        Indian Standard Time</p>
    </div>
  );
};
export default Info;
