import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <h1 className="text-center mt-4">
      <span className="font-bold text-5xl ">
        <Typewriter
          words={[
            "Find Your Perfect Roommate",
            "Live Better Together",
            "Match. Chat. Move In.",
          ]}
          loop={10}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TypewriterEffect;
