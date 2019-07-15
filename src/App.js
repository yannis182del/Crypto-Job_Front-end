
import React from "react";
import { Route, Switch } from "react-router";

import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import { ReactComponent as Logo } from "./assets/Images/logo.svg";

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
      <Route path="/:id" component={Articles} />
      <Route exact path="*" component={JobCard} />
    </Switch>
  </>
)

export default App
