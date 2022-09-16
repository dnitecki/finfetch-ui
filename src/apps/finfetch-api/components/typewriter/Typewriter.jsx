import React from "react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faFingerprint,
  faRocket,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

export default function TypewriterEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Verified ", "Real-Time ", "Absolutely Free "],
          autoStart: true,
          delay: 75,
          loop: true,
        }}
      />
    </>
  );
}
