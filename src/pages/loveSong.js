import React from "react";
import Quote from "../components/Quote";
import Scene from "../components/Scene";
import lovesong from "../images/lovesong.png";
import Img from "../components/Img";

const LoveSong = () => (
  <div>
    <Scene isVisible>
      <Img src={lovesong} alt="Sara Barellies as a main influence" />.
    </Scene>
    <Scene isVisible xl>
      <Quote>
        "They had encouraged me to keep writing, and I just wasn't having any
        luck. ...I started to get really insecure about it, and then I got
        really pissed off at myself for caring what anybody thought. ... I went
        to a rehearsal space one day. I sat down and wrote something for me. And
        'Love Song' basically wrote itself. It's totally honest, and I'm very
        lucky the label liked it as well."[2]
      </Quote>

      <Quote>
        Later in 2011, she explained: "It was actually written for my record
        label. I had been turning in new music. I was getting the red light. I
        couldn't go into the studio yet because they were waiting for something.
        But I wouldn't ... nobody said what they were waiting for. So I kept
        turning in new songs, thinking like, 'Is this what you want? Is this
        what you want?' And it was always a big thumbs down, and I ended up
        writing 'Love Song' out of frustration."[3] In 2014, she stated it was
        "very tongue-in-cheek" and "nasty in a passive-aggressive way,"
        confirming it was a response to the record label pressuring her to make
        safe, "radio friendly" songs.[4]
      </Quote>
    </Scene>
  </div>
);

export default LoveSong;
