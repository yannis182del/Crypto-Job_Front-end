import React, { Component } from "react";
import CryptoPrice from "./CrytoPrice";
import classnames from "classnames";

import "./menu.css";

import { ReactComponent as Logo } from "../../Images/logo.svg";

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div>
        <div className="menu">
          <nav  className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}>
            <ul className="nav-list">
              <li>
                {" "}
                <CryptoPrice />
              </li>
              <li>
                <p className="title">
                  <Logo
                    className="App-logo"
                    ariaLabel="logo"
                    onClick={() => {
                      window.location = "/";
                    }}
                  />
                </p>
              </li>
              <li>
                <p className="job-posting">
                  <span className="talents">Looking for talents? </span>
                  <span className="post-job">
                    <a
                      className="job-name_list"
                      href="https://forms.gle/5UEFTs2n625YmmVu8"
                    >
                      Post a job
                    </a>
                  </span>
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;
