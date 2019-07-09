import React from "react";
import "./toggle.scss"


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <div className="button-wrapper">
          <div className="slider"></div>
          <button onClick={this.handleClick} className={this.state.isToggleOn ? 'green' : 'red'}>
            {this.state.isToggleOn ? 'Remote' : 'Hot'}
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

  export default Muchrender