import React from "react";
import { connect } from "refunk";

import Scene from "../components/Scene";
import Clip from "../components/Clip";
import Huge from "../components/Huge";

const Thanks = props => {
  const scene = props.scene8;
  return (
    <Scene>
      <Clip id={scene.c1} hideNav center>
        <Huge>Thank you</Huge>
      </Clip>
    </Scene>
  );
};

export default connect(Thanks);
