import React from "react";
import About from "../About";
import "./footer.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Footer() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link  to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/about/"  component={About}  />
      </div>
    </Router>
  );
}
