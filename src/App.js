import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import ReactDOM from "react-dom";
import Menu from "./components/menu/Menu";
import TextInput from "./components/LocationInput/TextInput";
import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import ScrollToTop from "./components/Scrolling/ScrollToTop"
import "./index.css";


const App = () => (
  <>
    <Menu />
    <Switch>
      <Route exact path="/" component={JobCard} />
      <Route  onUpdate={() => window.scrollTo(0, 0)} path="/job/:id" component={Articles} />
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
