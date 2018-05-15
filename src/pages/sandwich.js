import React from "react";
import Scene from "../components/Scene";
import Big from "../components/Big";
import Img from "../components/Img";
import sandwich_blank from "../images/sandwich_blank.png";
import sandwich_sandwich from "../images/sandwich_sandwich.png";

const Sandwich = () => (
  <div>
    <Scene isVisible>
      <Img src={sandwich_blank} alt="Are these sandwiches?" />
    </Scene>

    <Scene isVisible>
      <Img src={sandwich_sandwich} alt="These are all sandwiches" />
    </Scene>

    <Scene isVisible nextPage="examples" hideNav>
      <Big>Is this a game?</Big>
    </Scene>
  </div>
);

export default Sandwich;
