import React from "react";
import FaIcon from "../../assets/FaIcon";
import "./Input.css";


const MainInput = props => {
  return (
    <div className="input-container">
      <FaIcon className="fa fa-search input-glass" onClick={props.onClick} />
      <input
        className={props.class}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default MainInput;
