import React, { useState, useEffect } from "react";
import Typewriter from "react-typewriter-effect";

const LoopingTypewriter = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Change key to reset the typewriter effect
    }, 5000); // Adjust timing to match the length of your text and typing speed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Typewriter
        key={key}
        textStyle={{
          fontFamily: "Great Vibes, cursive",
          color: "#ff4d4d",
          fontSize: "3rem",
          textAlign: "center",
          fontStyle: "italic",
        }}
        startDelay={100}
        cursorColor="#ff4d4d"
        text="Happy Birthday!"
        typeSpeed={100}
        hideCursorAfterText
      />
    </div>
  );
};

export default LoopingTypewriter;
