import React from "react";
import { connect } from "refunk";
import ns from "../updaters/ns";

import Scene from "../components/Scene";
import Big from "../components/Big";
import Clip from "../components/Clip";

const Why = props => {
  const scene = props.scene4;
  return (
    <Scene>
      <Clip id={scene.c1} clickFn={() => props.update(ns("scene4", "c2"))}>
        <ol>
          <li>
            <Big>World Model</Big>
          </li>
          <li>
            <Big>Parser</Big>
          </li>
        </ol>
      </Clip>

      <Clip id={scene.c2} nextPage="love-song" hideNav>
        <ol>
          <li>
            <Big>World Model === State + Actions</Big>
          </li>
          <li>
            <Big>Parser === ???</Big>
          </li>
        </ol>
      </Clip>
    </Scene>
  );
};

export default connect(Why);
