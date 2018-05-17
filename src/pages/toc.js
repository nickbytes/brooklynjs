import React from "react";
import { connect } from "refunk";

import Scene from "../components/Scene";
import { Link } from "react-router-dom";
import Text from "../components/Text";
import Clip from "../components/Clip";

const Toc = props => {
  const scene = props.scene2;
  return (
    <Scene>
      <Clip
        id={scene.c1}
        isVisible
        nextPage="what-is-a-text-adventure-game"
        hideNav
      >
        <ul>
          <li>
            <Text>
              <Link to="/">Intro</Link>
            </Text>
          </li>
          <li>
            <Text>
              <Link to="/what-is-a-text-adventure-game">
                What is a text adventure game?
              </Link>
            </Text>
          </li>
          <li>
            <Text>
              <Link to="/why-react">Why React?</Link>
            </Text>
          </li>
          <li>
            <Text>
              <Link to="/love-song">Love Song (2007) by Sara Bareilles</Link>
            </Text>{" "}
          </li>
          <li>
            <Text>
              <Link to="/slashington">Slashington (my game)</Link>
            </Text>
          </li>
          <li>
            <Text>
              <Link to="/build-your-own">Build Your Own</Link>
            </Text>
          </li>
        </ul>
      </Clip>
    </Scene>
  );
};

export default connect(Toc);
