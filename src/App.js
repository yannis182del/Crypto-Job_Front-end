
import React from "react";
import { Route, Switch } from "react-router";

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
    <Switch>
      <Route exact path="/" component={JobCard} />
      <Route path="/job/:id" component={Articles} />
      <Route exact path="*" component={JobCard} />
      {/* <Route path="/job/:id" component={Recommended} /> */}
    </Switch>
  </>
);

export default App