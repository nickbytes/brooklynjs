import React from "react";
import Quote from "../components/Quote";
import Scene from "../components/Scene";

const Wut = () => (
  <div>
    <Scene isVisible>
      <Quote>
        computer programs that display text, accept textual responses, and then
        display additional text in reaction to what has been typed
      </Quote>

      <Quote>react to input meaningfully</Quote>

      <ol>
        <li>World Representation</li>
        <li>Parser</li>
      </ol>
    </Scene>

    <Scene isVisible>
      <h1>hmmm</h1>
    </Scene>
  </div>
);

export default Wut;
