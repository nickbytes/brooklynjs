import React from "react";
import Scene from "../components/Scene";
import Text from "../components/Text";
import Big from "../components/Big";
import BigInline from "../components/BigInline";

const about = [
  "journey to your niece's birthday party",
  "programming",
  "pets your can't forget",
  "selflessness",
  "boring jobs",
  "Taylor Swift's politics",
  "trains"
];

const Slashington = () => (
  <div>
    <Scene isVisible>
      <Big>Slashington</Big>
    </Scene>

    <Scene isVisible>
      <Text>What's it about?</Text>

      <div>{about.map(x => <BigInline>{x}</BigInline>)}</div>
    </Scene>
  </div>
);

export default Slashington;
