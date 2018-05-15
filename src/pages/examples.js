import React from "react";
import Scene from "../components/Scene";
import Text from "../components/Text";

const Examples = () => (
  <div>
    <Scene isVisible nextPage="why-react" hideNav>
      <Text>
        Examples of games that'll inspire your next text adventure game.
      </Text>
      <ul>
        <li>
          <a href="http://www.seerscatalogue.com/">
            The Seers' Catalogue (Web)
          </a>
        </li>
        <li>
          <a href="http://kentuckyroutezero.com/">
            Kentucky Route Zero (multiple platforms)
          </a>
        </li>
        <li>
          <a href="http://morgane.com/fantom">Fantom (Web)</a>
        </li>
        <li>
          <a href="https://itunes.apple.com/us/app/blackbar/id672002602?mt=8">
            Blackbar (iOS)
          </a>
        </li>
        <li>
          <a href="https://www.sbnation.com/a/17776-football">17776 (Web)</a>
        </li>
      </ul>
    </Scene>
  </div>
);

export default Examples;
