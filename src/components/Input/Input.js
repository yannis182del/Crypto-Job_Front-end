import React from "react";
import LookingGlass from "../../assets/LookingGlass";
import "./Input.css";


const MainInput = props => {
  return (
    <div className="input-container">
  

      <LookingGlass className="fa fa-search input-glass" onClick={props.onClick} />
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