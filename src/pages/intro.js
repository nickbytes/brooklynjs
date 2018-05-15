import React from "react";
import { connect } from "refunk";
import Big from "../components/Big";
import Text from "../components/Text";
import Scene from "../components/Scene";

const Intro = props => (
  <div>
    <Scene isVisible nextPage="table-of-contents" hideNav>
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
    </Scene>
  </div>
);

export default connect(Intro);
