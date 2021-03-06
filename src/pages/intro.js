import React from "react";
import { connect } from "refunk";
import Big from "../components/Big";
import Text from "../components/Text";
import Scene from "../components/Scene";
import Clip from "../components/Clip";

const Intro = props => {
  const scene = props.scene1;
  return (
    <Scene>
      <Clip id={scene.c1} nextPage="table-of-contents" hideNav>
        <Big bottom>{props.talkTitle}</Big>
        <Text mbNone>{props.name}</Text>
        <Text mbNone>
          <a href={`//twitter.com/${props.tw.substring(1)}`}>
            {props.tw} on twitter
          </a>
        </Text>
        <Text mbNone>
          <a href={`//github.com/${props.gh.substring(1)}`}>
            {props.gh} on github
          </a>
        </Text>
        <Text mbNone>
          <a href="http://nickbytes.com">nickbytes.com</a>
        </Text>
        <Text>
          Sr. Engineer @ <a href="//postlight.com">Postlight</a> (<a href="https://grnh.se/74aiavbi2">
            We're hiring
          </a>)
        </Text>
      </Clip>
    </Scene>
  );
};

export default connect(Intro);
