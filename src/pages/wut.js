import React from "react";
import { connect } from "refunk";
import ns from "../updaters/ns";

import Quote from "../components/Quote";
import Scene from "../components/Scene";
import Text from "../components/Text";
import Big from "../components/Big";
import Img from "../components/Img";

import thinking from "../images/thinking.png";
import zork from "../images/zork.gif";

const Wut = props => {
  const scene = props.scene1;

  return (
    <div>
      <Scene id={scene.c1} clickFn={() => props.update(ns("scene1", "c2"))}>
        <Img src={zork} alt="Zork, yea?" />
      </Scene>
      <Scene isVisible>
        <Quote>
          computer programs that display text, accept textual responses, and
          then display additional text in reaction to what has been typed
        </Quote>

        <Quote>react to input meaningfully</Quote>
      </Scene>

      <Scene id={scene.c2} clickFn={() => props.update(ns("scene1", "c3"))}>
        <ol>
          <li>
            <Big>World Representation</Big>
          </li>
          <li>
            <Big>Parser</Big>
          </li>
        </ol>
      </Scene>

      <Scene id={scene.c3} clickFn={() => props.update(ns("scene1", "c4"))}>
        <div style={{ textAlign: "center" }}>
          <Img src={thinking} mw={400} alt="thinking_intensifies" />
          <Text>:thinking_intensifies:</Text>
        </div>
      </Scene>

      <Scene nextPage="why-react" hideNav id={scene.c4}>
        <Big>🚨 extremely good games: 🚨</Big>
        <ul>
          <li>
            <a href="http://www.seerscatalogue.com/">
              The Seers' Catalogue (Web)
            </a>
          </li>
          <li>
            <a href="http://kentuckyroutezero.com/">
              Kentucky Route Zero (multiple platforms)
            </a>
          </li>
          <li>
            <a href="http://morgane.com/fantom">Fantom (Web)</a>
          </li>
          <li>
            <a href="https://itunes.apple.com/us/app/blackbar/id672002602?mt=8">
              Blackbar (iOS)
            </a>
          </li>
          <li>
            <a href="https://www.sbnation.com/a/17776-football">17776 (Web)</a>
          </li>
        </ul>
      </Scene>
    </div>
  );
};

export default connect(Wut);
