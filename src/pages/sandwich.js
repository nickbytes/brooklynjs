import React from "react";
import Scene from "../components/Scene";
import Big from "../components/Big";
import Voice from "../components/Voice";
import Text from "../components/Text";

const Sandwich = () => (
  <div>
    <Scene isVisible>
      <Voice>Is that really a game?</Voice>
    </Scene>

    <Scene>
      <Text>This is infuriating.</Text>
    </Scene>

    <Scene>
      <Big>Here are some things that I consider 'games':</Big>
    </Scene>
  </div>
);

export default Sandwich;
