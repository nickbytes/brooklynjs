import React from "react";
import Quote from "../components/Quote";
import Scene from "../components/Scene";
import Text from "../components/Text";
import Big from "../components/Big";

const Wut = () => (
  <div>
    <Scene isVisible>
      <Quote>
        computer programs that display text, accept textual responses, and then
        display additional text in reaction to what has been typed
      </Quote>

      <Quote>react to input meaningfully</Quote>
    </Scene>

    <Scene isVisible>
      <ol>
        <li>
          <Big>World Representation</Big>
        </li>
        <li>
          <Big>Parser</Big>
        </li>
      </ol>
    </Scene>

    <Scene isVisible nextPage="sandwich-alignment" hideNav>
      <Text>:thinking_intensifies:</Text>
    </Scene>
  </div>
);

export default Wut;
