import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "refunk";

import BuildYourOwn from "./pages/buildYourOwn";
import Intro from "./pages/intro";
import Examples from "./pages/examples";
import Wut from "./pages/wut";
import LoveSong from "./pages/loveSong";
import Sandwich from "./pages/sandwich";
import Slashington from "./pages/slashington";
import Why from "./pages/why";

const App = props => (
  <Switch>
    <Route exact path="/" component={Intro} />
    <Route path="/what-is-a-text-adventure-game" component={Wut} />
    <Route path="/sandwich-alignment" component={Sandwich} />
    <Route path="/examples" component={Examples} />
    <Route path="/why-react" component={Why} />
    <Route path="/love-song" component={LoveSong} />
    <Route path="/slashington" component={Slashington} />
    <Route path="/build-your-own" component={BuildYourOwn} />
  </Switch>
);

export default connect(App);
