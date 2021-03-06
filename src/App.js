import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "refunk";

import BuildYourOwn from "./pages/buildYourOwn";
import Intro from "./pages/intro";
import Wut from "./pages/wut";
import LoveSong from "./pages/loveSong";
import Slashington from "./pages/slashington";
import Why from "./pages/why";
import Toc from "./pages/toc";
import NoMatch from "./components/NoMatch";
import Thanks from "./pages/thanks";

const App = props => (
  <Switch>
    <Route exact path="/" component={Intro} />
    <Route path="/table-of-contents" component={Toc} />
    <Route path="/what-is-a-text-adventure-game" component={Wut} />
    <Route path="/why-react" component={Why} />
    <Route path="/love-song" component={LoveSong} />
    <Route path="/slashington" component={Slashington} />
    <Route path="/build-your-own" component={BuildYourOwn} />
    <Route path="/thanks" component={Thanks} />
    <Route component={NoMatch} />
  </Switch>
);

export default connect(App);
