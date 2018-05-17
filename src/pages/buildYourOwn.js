import React from "react";
import { connect } from "refunk";
import ns from "../updaters/ns";

import Scene from "../components/Scene";
import Big from "../components/Big";
import Text from "../components/Text";
import Img from "../components/Img";
import lol from "../images/lol.gif";
import Clip from "../components/Clip";

const BuildYourOwn = props => {
  const scene = props.scene7;
  return (
    <Scene>
      <Clip id={scene.c1} clickFn={() => props.update(ns("scene7", "c2"))}>
        <Big>An example?</Big>
      </Clip>

      <Clip id={scene.c2} clickFn={() => props.update(ns("scene7", "c3"))}>
        <Img src={lol} alt={`You're looking at one!`} />
      </Clip>

      <Clip id={scene.c3} clickFn={() => props.update(ns("scene7", "c4"))}>
        <Big> Some code, plz?</Big>
      </Clip>

      <Clip id={scene.c4} clickFn={() => props.update(ns("scene7", "c5"))}>
        <ol>
          <li>World Model</li>
          <li>Parsers</li>
        </ol>
      </Clip>

      <Clip id={scene.c5} clickFn={() => props.update(ns("scene7", "c6"))}>
        <Text>World Model: OMG plain objects</Text>
      </Clip>

      <Clip id={scene.c6} nextPage={"thanks"} hideNav>
        <Text>
          <Big>
            <a href="https://github.com/nickbytes/brooklynjs">
              https://github.com/nickbytes/brooklynjs
            </a>
          </Big>
        </Text>
      </Clip>
    </Scene>
  );
};

export default connect(BuildYourOwn);
