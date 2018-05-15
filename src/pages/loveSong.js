import React from "react";
import Quote from "../components/Quote";
import Scene from "../components/Scene";
import lovesong from "../images/lovesong.png";
import Img from "../components/Img";
import Big from "../components/Big";
import Text from "../components/Text";

const LoveSong = () => (
  <div>
    <Scene isVisible nextPage="slashington" hideNav>
      <Img src={lovesong} alt="Sara Barellies as a main influence" />.
    </Scene>
  </div>
);

export default LoveSong;
