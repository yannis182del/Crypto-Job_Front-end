import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

export function AppRouter() {
  return (
    <div>
      <nav className="nav">
        <ul className="ul-el">
          <li>
            <Link className="router-link home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="router-link left" to="/candidat">
              Candidat
            </Link>
          </li>
          <li>
            <Link className="router-link left" to="/recruteur">
              Recruteur<span>?</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function Router({ jobCard, Articles, Candidat, Recruteur, Contact }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={jobCard} />
        <Route path="/job/:id" component={Articles} />
        <Route path="/candidat" component={Candidat} />
        <Route path="/recruteur" component={Recruteur} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Contact} />
        <Route path="/a-propos" component={Contact} />
      </Switch>
    </div>
  );
}
