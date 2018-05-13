import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import initialState from "./initialState";

ReactDOM.render(
  <Router>
    <App {...initialState} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
