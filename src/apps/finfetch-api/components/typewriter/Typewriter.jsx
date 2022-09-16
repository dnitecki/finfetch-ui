import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Verified ", "Real-Time ", "Truly Free "],
          autoStart: true,
          delay: 75,
          loop: true,
        }}
      />
    </>
  );
}
