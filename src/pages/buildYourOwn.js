import React from "react";
import Scene from "../components/Scene";
import Big from "../components/Big";
import Text from "../components/Text";
import Huge from "../components/Huge";
import Img from "../components/Img";
import lol from "../images/lol.gif";

const BuildYourOwn = () => (
  <div>
    <Scene isVisible>
      <Big>
        Want to see an example of a framework for building text adventure games
        in React?
      </Big>
    </Scene>

    <Scene isVisible>
      <Img src={lol} alt={`You're looking at one!`} />
    </Scene>

    <Scene isVisible nextPage={"thanks"} hideNav>
      <Text>
        <Big>
          <a href="https://github.com/nickbytes/brooklynjs">
            https://github.com/nickbytes/brooklynjs
          </a>
        </Big>
      </Text>
    </Scene>
  </div>
);

export default BuildYourOwn;
