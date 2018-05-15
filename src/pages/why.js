import React from "react";
import Scene from "../components/Scene";
import Big from "../components/Big";

const Why = () => (
  <div>
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
    <Scene isVisible nextPage="love-song" hideNav>
      <ol>
        <li>
          <Big>World Representation === State + Actions</Big>
        </li>
        <li>
          <Big>Parser === web browser's ability to process forms</Big>
        </li>
      </ol>
    </Scene>
  </div>
);

export default Why;
