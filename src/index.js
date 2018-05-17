import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import initialState from "./initialState";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App {...initialState} />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
