
import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import { ReactComponent as Logo } from "./assets/Images/logo.svg";
import "./index.css";



function Candidat() {
  return <h2>Candidat</h2>;
}

function Recruteur() {
  return <h2>Recruteur</h2>;
}


function AppRouter() {
  return (
    <div>
      <nav className="nav">
        <ul className="ul-el">
          <li>
            <Link className="router-link home" to="/">Home</Link>
          </li>
          <li >
            <Link className="router-link left" to="/candidat">Candidat</Link>
          </li>
          <li>
            <Link className="router-link left" to="/recruteur">Recruteur  <span>?</span></Link>
          </li>
        </ul>
      </nav>
    </div>

  );
}


const App = () => (
  <>
    <AppRouter />
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
      <Route path="/candidat" component={Candidat} />
      <Route path="/recruteur" component={Recruteur} />
    </Switch>
  </>
)

export default App
