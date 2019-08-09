
import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import { ReactComponent as Logo } from "./assets/Images/logo.svg";
import "./index.css";



function Candidat() {
  return (
    <div className="candidat-form">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScELoRwcw4m7bW_iPB8QN3qHd2w8ouEMEMgCbBN459gUDgwAA/viewform?embedded=true" width="640" height="814" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


      </div>
  )
}

function Recruteur() {
  return (
    <div className="candidat-form">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScELoRwcw4m7bW_iPB8QN3qHd2w8ouEMEMgCbBN459gUDgwAA/viewform?embedded=true" width="640" height="814" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    </div>
  )
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
            <Link className="router-link left" to="/recruteur">Recruteur<span>?</span></Link>
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
