import React from "react";

import Big from "../Big";
import Scene from "../Scene";

const NoMatch = () => (
  <div>
    <Scene isVisible hideNav>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0Q14rHLvMco?rel=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="404"
      />
      <Big>
        We have to go <a href="/">back</a>.
      </Big>
    </Scene>
  </div>
);

export default NoMatch;
