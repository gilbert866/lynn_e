// Balloon.jsx
import React from "react";
import "./Balloons.css"; // Import the CSS for balloon styling

const Balloon = ({ color, left, animationDelay }) => {
  return (
    <div
      className="balloon"
      style={{
        backgroundColor: color,
        left: left,
        animationDelay: animationDelay,
      }}
    ></div>
  );
};

export default Balloon;
