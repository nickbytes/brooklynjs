import React from "react";
import { connect } from "refunk";
import ns from "../updaters/ns";

import Scene from "../components/Scene";
import Text from "../components/Text";
import Big from "../components/Big";
import Img from "../components/Img";

import os from "../images/os.gif";
import jobs from "../images/jobs.gif";
import badge from "../images/badge.png";
import Clip from "../components/Clip";

import p1 from "../images/badges/1.png";
import p2 from "../images/badges/2.png";
import p3 from "../images/badges/3.png";
import p4 from "../images/badges/4.png";
import p5 from "../images/badges/5.png";
import p6 from "../images/badges/6.png";
import p7 from "../images/badges/7.png";
import p8 from "../images/badges/8.png";
import p9 from "../images/badges/9.png";
import p10 from "../images/badges/10.png";
import p11 from "../images/badges/11.png";
import p13 from "../images/badges/12.png";

const Slashington = props => {
  const scene = props.scene6;
  return (
    <Scene>
      <Clip id={scene.c1} clickFn={() => props.update(ns("scene6", "c2"))}>
        <Big>
          <a href="https://slashington.com">Slashington</a>
        </Big>
      </Clip>

      <Clip
        id={scene.c2}
        clickFn={() => props.update(ns("scene6", "c3"))}
        center
      >
        <Text>Job selector</Text>
        <Img src={jobs} alt="could i interest you in a job?" />
      </Clip>

      <Clip
        id={scene.c3}
        clickFn={() => props.update(ns("scene6", "c4"))}
        center
      >
        <Text>Getting your badge</Text>
        <Img src={badge} mw={400} alt="your new badge" />
      </Clip>

      <Clip
        id={scene.c4}
        clickFn={() => props.update(ns("scene6", "c5"))}
        center
        xl
      >
        <Text>
          Lots of people sent me there badges. (Please send me yours!)
        </Text>
        <div>
          <Img src={p4} inline mw={300} alt="more badges!" />
          <Img src={p5} inline mw={300} alt="more badges!" />
          <Img src={p6} inline mw={300} alt="more badges!" />
          <Img src={p7} inline mw={300} alt="more badges!" />
          <Img src={p8} inline mw={300} alt="more badges!" />
          <Img src={p9} inline mw={300} alt="more badges!" />
          <Img src={p10} inline mw={300} alt="more badges!" />
          <Img src={p11} inline mw={300} alt="more badges!" />
          <Img src={p13} inline mw={300} alt="more badges!" />
          <Img src={p1} inline mw={300} alt="more badges!" />
          <Img src={p2} inline mw={300} alt="more badges!" />
          <Img src={p3} inline mw={300} alt="more badges!" />
        </div>

        {/* <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/>
        <Img src={1} alt="more badges!"/> */}
      </Clip>

      <Clip
        id={scene.c5}
        clickFn={() => props.update(ns("scene6", "c6"))}
        xl
        center
      >
        <Text>Tiny operating system</Text>
        <Img src={os} mw={1000} alt="a tiny operating system" />
      </Clip>

      <Clip id={scene.c6} nextPage="build-your-own" center hideNav>
        <Big>
          <a href="https://slashington.com">slashington.com</a>
        </Big>
      </Clip>
    </Scene>
  );
};

export default connect(Slashington);
