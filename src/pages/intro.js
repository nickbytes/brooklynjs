import React from "react";
import { connect } from "refunk";
import Big from "../components/Big";
import Text from "../components/Text";

const Intro = props => (
  <div>
    <Big>{props.talkTitle}</Big>
    <Text>{props.name}</Text>
    <Text>{props.tw}</Text>
    <Text>{props.gh}</Text>
  </div>
);

export default connect(Intro);
