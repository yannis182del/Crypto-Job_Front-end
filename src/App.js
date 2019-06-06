import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import ReactDOM from "react-dom";

import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import ScrollToTop from "./components/Scrolling/ScrollToTop"
import "./index.css";
import { ReactComponent as Logo } from "../../my-app/src/Images/logo.svg";


const App = () => (
  <>
      <Logo
       className="App-logo"
       aria-label="logo"
       onClick={() => { window.location = "/"}}/>
    <Switch>
      <Route exact path="/" component={JobCard} />
      <Route path="/job/:id" component={Articles} />
    </Switch>
  </>
);

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop>
    <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
