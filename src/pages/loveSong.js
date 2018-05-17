import React from "react";
import { connect } from "refunk";

import Scene from "../components/Scene";
import lovesong from "../images/lovesong.png";
import Img from "../components/Img";
import Clip from "../components/Clip";

const LoveSong = props => {
  const scene = props.scene5;
  return (
    <Scene>
      <Clip id={scene.c1} nextPage="slashington" hideNav>
        <Img src={lovesong} alt="Sara Barellies as a main influence" />.
      </Clip>
    </Scene>
  );
};

export default connect(LoveSong);
