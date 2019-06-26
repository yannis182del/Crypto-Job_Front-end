import React from "react";
import { Route } from "react-router";

import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
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

export default App