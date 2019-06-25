import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import ReactDOM from "react-dom";

import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import ScrollToTop from "./components/Scrolling/ScrollToTop";
import { ReactComponent as Logo } from "../../my-app/src/Images/logo.svg";
// import Recommended from "./components/Cards/Recommended";

import "./index.css";

const App = () => (
  <>
    <Logo
      className="App-logo"
      aria-label="logo"
      onClick={() => {
        window.location = "/";
      }}
    />
    <Route exact path="/" component={JobCard} />
    <Route path="/job/:id" component={Articles} />
    {/* <Route path="/job/:id" component={Recommended} /> */}
  </>
);

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
