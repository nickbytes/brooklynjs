import React from "react";
import { connect } from "refunk";

import Scene from "../components/Scene";
import Big from "../components/Big";
import Text from "../components/Text";
import Img from "../components/Img";
import lol from "../images/lol.gif";

const BuildYourOwn = props => (
  <div>
    <Scene isVisible>
      <Big>An example?</Big>
    </Scene>

    <Scene isVisible>
      <Img src={lol} alt={`You're looking at one!`} />
    </Scene>

    <Scene isVisible>
      <Big> Some code, plz?</Big>
    </Scene>

    <Scene isVisible>
      <ol>
        <li>World Representation</li>
        <li>Parsers</li>
      </ol>
    </Scene>

    <Scene isVisible>
      <Text>World Representation: OMG plain objects</Text>
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

export default connect(BuildYourOwn);
