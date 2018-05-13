import React from "react";
import Scene from "../components/Scene";

const Why = () => (
  <div>
    <Scene isVisible>
      <ol>
        <li>World</li>
        <li>Parser</li>
      </ol>
    </Scene>
    <Scene isVisible>
      <ol>
        <li>World === State + Actions</li>
        <li>Parser === web browsers' ability to process forms</li>
      </ol>
    </Scene>
    <Scene isVisible>
      <ol>
        <li>World === State + Actions</li>

        <ul>
          <li>Explore state management libs</li>
        </ul>
        <li>Parser === web browsers' ability to process forms</li>
        <ul>
          <li>Your chance to get creative</li>
        </ul>
      </ol>
    </Scene>
  </div>
);

export default Why;
