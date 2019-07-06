import React from "react";
import LookingGlass from "../assets/LookingGlass";

const MainInput = props => {
  return (
    <div className="input-container">
      <LookingGlass className="fa fa-search" onClick={props.onClick} />

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
