import React from 'react'
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";


export function AppRouter() {
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
  
export function Router(props) {
    return (
        <div>
    <Switch>
      <Route exact path="/" component={props.jobCard} />
      <Route path="/job/:id" component={props.Articles} />
      <Route path="/candidat" component={props.Candidat} />
      <Route path="/recruteur" component={props.Recruteur} />
      <Route path="/contact" component={props.Contact} />
      <Route path="/team" component={props.Contact} />
      <Route path="/a-propos" component={props.Contact} />
    </Switch>
        </div>
    )
}
