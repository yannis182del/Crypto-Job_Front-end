import React from "react";
import "./toggle.scss";

class Toggle extends React.Component {
  state = { isToggleOn: true };

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };

  render() {
    return (
      <div className="button-wrapper">
        <div className="slider" />
        <button
          onClick={this.handleClick}
          className={this.state.isToggleOn ? "green" : "red"}
        >
          {this.state.isToggleOn ? "Hot" : "Remote"}
        </button>
      </div>
    );
  }
}

function Muchrender(props) {
  return (
    <div className={props.className}>
      <Toggle />
    </div>
  );
}

export default Muchrender;
