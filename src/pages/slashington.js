import React from "react";
import Scene from "../components/Scene";
import Text from "../components/Text";
import Big from "../components/Big";
import Img from "../components/Img";

import os from "../images/os.gif";
import jobs from "../images/jobs.gif";
import badge from "../images/badge.png";

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
      <Big>
        <a href="https://slashington.com">Slashington</a>
      </Big>
    </Scene>

    <Scene isVisible center>
      <Text>Job selector</Text>
      <Img src={jobs} alt="could i interest you in a job?" />
    </Scene>

    <Scene isVisible center>
      <Text>Getting your badge</Text>
      <Img src={badge} mw={400} alt="your new badge" />
    </Scene>

    <Scene isVisible>
      <Text>Lots of people sent me there badges. (Please send me yours!)</Text>
    </Scene>

    <Scene isVisible xl center>
      <Text>Tiny operating system</Text>
      <Img src={os} mw={1000} alt="a tiny operating system" />
    </Scene>

    <Scene isVisible nextPage="build-your-own" hideNav>
      <Big>
        <a href="https://slashington.com">slashington.com</a>
      </Big>
    </Scene>
  </div>
);

export default Slashington;
