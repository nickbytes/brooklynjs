import React from "react";
import { connect } from "refunk";
import ns from "../updaters/ns";

import Quote from "../components/Quote";
import Text from "../components/Text";
import Big from "../components/Big";
import Img from "../components/Img";

import thinking from "../images/thinking.png";
import zork from "../images/zork.gif";
import Clip from "../components/Clip";
import Scene from "../components/Scene";
import { ListItem } from "../components/Lists/ListItem";

const Wut = props => {
  const scene = props.scene3;

  return (
    <Scene>
      <Clip id={scene.c1} clickFn={() => props.update(ns("scene3", "c2"))}>
        <Img src={zork} alt="Zork, yea?" />
      </Clip>

      <Clip id={scene.c2} clickFn={() => props.update(ns("scene3", "c3"))}>
        <Quote>
          "...computer programs that display text, accept textual responses, and
          then display additional text in reaction to what has been typed..."
        </Quote>

        <Quote>"...react to input meaningfully..."</Quote>
      </Clip>

      <Clip id={scene.c3} clickFn={() => props.update(ns("scene3", "c4"))}>
        <ol>
          <li>
            <Big>World Model</Big>
          </li>
          <li>
            <Big>Parser</Big>
          </li>
        </ol>
      </Clip>

      <Clip
        id={scene.c4}
        clickFn={() => props.update(ns("scene3", "c5"))}
        center
      >
        <Img src={thinking} mw={400} alt="thinking_intensifies" />
        <Text>:thinking_intensifies:</Text>
      </Clip>

      <Clip id={scene.c5} nextPage="why-react" hideNav>
        <Text med bold>
          🚨 Very good games: 🚨
        </Text>
        <ul>
          <ListItem>
            <Text mbNone>
              <a href="http://www.seerscatalogue.com/">
                The Seers' Catalogue (Web)
              </a>
            </Text>
          </ListItem>
          <ListItem>
            <Text mbNone>
              <a href="http://kentuckyroutezero.com/">
                Kentucky Route Zero (multiple platforms)
              </a>
            </Text>
          </ListItem>
          <ListItem>
            <Text mbNone>
              <a href="http://morgane.com/fantom">Fantom (Web)</a>
            </Text>
          </ListItem>
          <ListItem>
            <Text mbNone>
              <a href="https://itunes.apple.com/us/app/blackbar/id672002602?mt=8">
                Blackbar (iOS)
              </a>
            </Text>
          </ListItem>
          <ListItem>
            <Text mbNone>
              <a href="https://www.sbnation.com/a/17776-football">
                17776 (Web)
              </a>
            </Text>
          </ListItem>
          <ListItem>
            <Text mbNone>
              <a href="https://en.wikipedia.org/wiki/The_Adventures_of_Willy_Beamish">
                Willy Beamish (MS-DOS)
              </a>
            </Text>
          </ListItem>
        </ul>
      </Clip>
    </Scene>
  );
};

export default connect(Wut);
