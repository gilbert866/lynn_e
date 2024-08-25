import React, { useEffect, useState } from "react";
import "./Hearts.css";

const Hearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const addHeart = () => {
      setHearts((hearts) => [
        ...hearts,
        {
          id: Math.random(),
          left: Math.random() * 100 + "%", // Random horizontal position
          size: Math.random() * 20 + 10 + "px", // Random size between 10px and 30px
          animationDuration: Math.random() * 3 + 3 + "s", // Random animation duration between 3s and 6s
        },
      ]);

      // Clean up hearts that have fallen out of view
      setHearts((hearts) => hearts.filter((heart) => heart.top < 100));
    };

    const interval = setInterval(addHeart, 300); // Add a new heart every 300ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            width: heart.size,
            height: heart.size,
            animationDuration: heart.animationDuration,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Hearts;
