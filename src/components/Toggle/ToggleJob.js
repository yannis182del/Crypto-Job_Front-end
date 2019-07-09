import React from "react";
import "./toggle.scss";

class Muchrender extends React.Component {
  //state = { isToggleOn: true };
  // move the state to redux
  // handleClick = () => {
  //   this.setState({
  //     isToggleOn: !this.state.isToggleOn
  //   });
  // };

  render() {
    console.log("props", this.props);
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
