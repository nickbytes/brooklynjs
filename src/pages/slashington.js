import React from "react";
import Scene from "../components/Scene";
import Text from "../components/Text";
import Big from "../components/Big";

// const about = [
//   "journey to your niece's birthday party",
//   "programming",
//   "pets your can't forget",
//   "selflessness",
//   "boring jobs",
//   "Taylor Swift's politics",
//   "trains"
// ];

const Slashington = () => (
  <div>
    <Scene isVisible>
      <Big>Slashington</Big>
    </Scene>

    <Scene isVisible>
      <Big>My favorite aspects of the game:</Big>
    </Scene>

    <Scene isVisible>
      <Text>Tiny operating system</Text>
      {/* image here */}
    </Scene>

    <Scene isVisible>
      <Text>Job selector</Text>
      {/* image here */}
    </Scene>

    <Scene isVisible>
      <Text>Getting your badge</Text>
      {/* image here */}
    </Scene>

    <Scene isVisible>
      <Text>Lots of people sent me there badges. (Please send me yours!)</Text>
      {/* image here */}
    </Scene>

    <Scene isVisible nextPage="build-your-own" hideNav>
      <Big>Again, here is the link.</Big>
      <Big>
        <a href="https://slashington.com">slashington.com</a>
      </Big>
    </Scene>
  </div>
);

export default Slashington;
