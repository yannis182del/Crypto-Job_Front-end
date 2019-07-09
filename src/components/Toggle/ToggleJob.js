import React from "react";
import "./toggle.scss";

class Muchrender extends React.Component {

  render() {
    return (
      <div className={this.props.className}>
        <div className="button-wrapper">
          <div className="slider" />
          <button
            onClick={this.props.handleClick}
            className={!this.props.isToggleOn ? "green" : "red"}
          >
            {!this.props.isToggleOn ? "Hot" : "Remote"}
          </button>
        </div>
      </div>
    );
  }
}


export default Muchrender;
