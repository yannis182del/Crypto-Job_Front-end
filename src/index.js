import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppRouter from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";


import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/Scrolling/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);
